import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('recovery-manifest.json', root), 'utf8'));
const failures = [];
const online = process.argv.includes('--online');

async function verifyFile(file) {
  try {
    const contents = await readFile(new URL(`public${file.path}`, root));
    const hash = createHash('sha256').update(contents).digest('hex');
    if (hash !== file.sha256) failures.push(`${file.path}: conteúdo diferente`);
    if (online) {
      const response = await fetch(new URL(file.path, manifest.source), {
        headers: { 'Cache-Control': 'no-cache', 'Accept-Encoding': 'identity' },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const remote = Buffer.from(await response.arrayBuffer());
      if (!contents.equals(remote)) failures.push(`${file.path}: diferente do site online`);
    }
  } catch (error) {
    failures.push(`${file.path}: ${error.code || error.message}`);
  }
}

for (let i = 0; i < manifest.files.length; i += 6) {
  await Promise.all(manifest.files.slice(i, i + 6).map(verifyFile));
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  const reference = online
    ? `aos arquivos servidos agora por ${manifest.source}`
    : `à cópia verificada da publicação ${manifest.firebaseVersion}`;
  console.log(`${manifest.files.length}/${manifest.files.length} arquivos idênticos ${reference}.`);
}
