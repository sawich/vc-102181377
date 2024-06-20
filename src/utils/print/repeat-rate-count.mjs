import { findRepeatRateCount } from "../find-repeat-rate-count.mjs";
import { printConfig } from "./config.mjs";

/**
 *
 * @param {number[]} values
 * @param {{start: number, end: number}} config
 * @returns {number}
 */
export function printRepeatRateCount(values, config) {
  const count = findRepeatRateCount(values, config);
  process.stdout.write(`${count}`.padStart(printConfig.pad, " "));
}
