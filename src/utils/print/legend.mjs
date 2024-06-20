import { log } from "console";
import { printConfig } from "./config.mjs";

export function printLegend() {
  log("\ncolumns:");

  const { columns } = printConfig;
  for (const { title, info } of columns) {
    log(` * ${title} - ${info}`);
  }
}
