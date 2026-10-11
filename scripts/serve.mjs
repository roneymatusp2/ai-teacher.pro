import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const value = (flag, fallback) => args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback;
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(projectRoot, value('--dir', 'public'));
const host = value('--host', '127.0.0.1');
const port = Number(value('--port', process.env.PORT || '5173'));
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Porta inválida.');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function reply(response, status, message, headers = {}) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  response.end(message);
}

const server = createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) {
      return reply(response, 405, 'Method not allowed', { Allow: 'GET, HEAD' });
    }
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    } catch {
      return reply(response, 400, 'Bad request');
    }
    if (pathname.includes('\0')) return reply(response, 400, 'Bad request');
    let filename = resolve(root, `.${pathname}`);
    const withinRoot = relative(root, filename);
    if (withinRoot === '..' || withinRoot.startsWith(`..${sep}`) || isAbsolute(withinRoot)) {
      return reply(response, 403, 'Forbidden');
    }

    let info;
    try {
      info = await stat(filename);
    } catch (error) {
      if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error;
    }
    if (!info?.isFile()) {
      // Match the Firebase Hosting rewrite: every missing path serves the SPA.
      filename = resolve(root, 'index.html');
      info = await stat(filename);
    }

    const headers = {
      'Content-Type': mime[extname(filename)] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': 'no-store',
      'Accept-Ranges': 'bytes',
      'X-Content-Type-Options': 'nosniff',
    };
    let status = 200;
    let streamOptions;
    if (request.headers.range && request.method === 'GET') {
      const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
      let start = Number.NaN;
      let end = Number.NaN;
      if (match && (match[1] || match[2])) {
        start = match[1] ? Number(match[1]) : Math.max(0, info.size - Number(match[2]));
        end = match[1] && match[2] ? Math.min(Number(match[2]), info.size - 1) : info.size - 1;
      }
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= info.size) {
        return reply(response, 416, 'Range not satisfiable', { 'Content-Range': `bytes */${info.size}` });
      }
      status = 206;
      headers['Content-Length'] = end - start + 1;
      headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
      streamOptions = { start, end };
    }
    response.writeHead(status, headers);
    if (request.method === 'HEAD') return response.end();
    const stream = createReadStream(filename, streamOptions);
    stream.on('error', () => response.destroy());
    response.on('close', () => stream.destroy());
    stream.pipe(response);
  } catch (error) {
    console.error(error.message);
    if (!response.headersSent) reply(response, 500, 'Internal server error');
    else response.destroy();
  }
});

server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => console.log(`AI Teachers Pro: http://${host}:${port}`));
