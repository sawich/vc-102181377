import { log } from "console";
import { printConfig } from "./config.mjs";

/**
 *
 * @param {undefined} _
 * @param {number} index
 * @returns
 */
const createColumnTitle = (_, index) => `${index}`.padStart(printConfig.pad, " ");

/**
 *
 * @param {number} length
 */
export function printHeader(length) {
  const cols = Array.from({ length }).map(createColumnTitle);

  const { columns } = printConfig;
  for (const { title } of columns) {
    cols.push(title.padStart(printConfig.pad, " "));
  }

  process.stdout.write(cols.join(""));

  log("\n");
}
