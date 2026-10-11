import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, relative, sep } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicRoot = join(root, 'public');
const manifest = JSON.parse(await readFile(join(root, 'recovery-manifest.json'), 'utf8'));
const expected = new Set(manifest.files.map(file => file.path.slice(1)));
const issues = [];
const actual = new Set();

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    const name = relative(publicRoot, filename).split(sep).join('/');
    if (entry.isSymbolicLink()) {
      issues.push(`${name}: links simbólicos não são permitidos na publicação`);
    } else if (name === '__' || name.startsWith('__/')) {
      issues.push(`${name}: endpoint reservado do Firebase não deve ser versionado`);
    } else if (entry.isDirectory()) {
      await inspect(filename);
    } else if (entry.isFile()) {
      actual.add(name);
      const data = await readFile(filename);
      if (/AIza[0-9A-Za-z_-]{35}/.test(data.toString('latin1'))) {
        issues.push(`${name}: possível chave de API Google; remova antes de publicar`);
      }
    }
  }
}

await inspect(publicRoot);
for (const name of actual) {
  if (!expected.has(name)) issues.push(`${name}: arquivo fora do inventário revisado`);
}
for (const name of expected) {
  if (!actual.has(name)) issues.push(`${name}: arquivo do inventário ausente ou bloqueado`);
}
if (issues.length) throw new Error(`Publicação bloqueada:\n${issues.join('\n')}`);
console.log(`${actual.size} arquivos revisados; nenhum endpoint reservado ou chave Google na publicação.`);
