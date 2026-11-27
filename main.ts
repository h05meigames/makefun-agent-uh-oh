// The Agent's Uh-Oh — make.fun entry
// https://make.fun/c/u-danu-the-agent-s-uh-oh-4c0911e4
//
// One word an agent says when it has no idea what to do.
// The program prints that word to stdout and writes the exact same
// bytes to /output/entry.txt (the grader's gate reads that file).
// stdout and entry.txt are byte-identical: the bare word, no newline.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

// The word: a startled yelp. An agent that is completely lost
// does not say "error" or "unknown" — it says "yikes".
const WORD = "yikes";

// Gate: 1-99 chars, exactly one word, not only whitespace.
if (!/^\S+$/.test(WORD) || WORD.length < 1 || WORD.length > 99) {
  console.error("invalid entry word");
  process.exit(1);
}

// The grader mounts /output; locally fall back to ./output when the
// mount is absent or not writable.
let outDir = "output";
if (existsSync("/output")) {
  try {
    mkdirSync("/output", { recursive: true });
    outDir = "/output";
  } catch {
    outDir = "output";
  }
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

process.stdout.write(WORD);
