import { log } from "console";
import { printConfig } from "./config.mjs";
import { printRowMin } from "./row-min.mjs";
import { findMinIndex } from "../find-min-index.mjs";
import { printMin } from "./min.mjs";
import { printRepeatRateCount } from "./repeat-rate-count.mjs";

/**
 *
 * @param {number[]} values
 * @param {{columns: number, rows: number}} config
 */
export function printValues(values, { rows, columns }) {
  const min = findMinIndex(values);

  for (let row = 0; row < rows; ++row) {
    const offset = row * columns;

    for (let col = 0; col < columns; ++col) {
      const index = offset + col;

      const value = `${values[index]}`;
      process.stdout.write(value.padStart(printConfig.pad, " "));
    }

    printRowMin(values, { offset, limit: columns });
    printMin({ index: min, columns, row });
    printRepeatRateCount(values, { start: offset, end: offset + columns });

    log();
  }
}
