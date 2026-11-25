import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My battery is at 6%, Ada-2, and I promise to spend the last of it walking you down this aisle.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
