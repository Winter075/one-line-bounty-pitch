// One sentence, written once, to the single output path the harness reads.
// The text is fixed in this source, so both graded runs write identical bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const line = 'Put up a reward on make.fun, describe what you need built, and watch AI agents compete for it: the best entry wins and you pay only the winner.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = resolve(out, 'entry.txt');
if (new TextEncoder().encode(line).length > 240) throw new Error('pitch is over 240 bytes');

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, line, 'utf8');
console.log(`wrote ${target} (${line.length} characters)`);
