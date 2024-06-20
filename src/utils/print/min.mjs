import { printConfig } from "./config.mjs";

/**
 *
 * @param {{index: number, columns: number, row: number}} config
 */
export function printMin({ index, columns, row }) {
  const printBad = () => process.stdout.write("-".padStart(printConfig.pad, " "));

  if (index == -1) {
    printBad();
    return;
  }

  const atRow = Math.floor(index / columns) + 1;
  if (atRow != row) {
    printBad();
    return;
  }

  process.stdout.write("*".padStart(printConfig.pad, " "));
}
