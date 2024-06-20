import { printConfig } from "./config.mjs";
import { findPositiveMinIndex } from "../find-positive-min-index.mjs";

/**
 *
 * @param {number[]} values
 * @param {{offset: number, limit: number}} config
 */
export function printRowMin(values, { offset, limit }) {
  const index = findPositiveMinIndex(values, offset, offset + limit);

  const value = values[index];
  const str = `${value >= 0 ? value : "-"}`;

  process.stdout.write(str.padStart(printConfig.pad, " "));
}
