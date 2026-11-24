import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent freezes at every warning, asks me 1 or 2, and calls it caution — I built a genius that needs a permission slip just to breathe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
