import './check-public.mjs';
import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const projectRoot = new URL('../', import.meta.url);
const source = new URL('public/', projectRoot);
const output = new URL('dist/', projectRoot);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log(`Publicação copiada sem alterações para ${fileURLToPath(output)}`);
