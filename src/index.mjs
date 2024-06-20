import { log } from "console";
import { printHeader } from "./utils/print/header.mjs";
import { printLegend } from "./utils/print/legend.mjs";
import { printValues } from "./utils/print/values.mjs";
import { randomBetween } from "./utils/random-between.mjs";
import { findRepeatRateCount } from "./utils/find-repeat-rate-count.mjs";

const config = {
  min: -100,
  max: 100,
  columns: 10,
  rows: 10,
};

const init = () => randomBetween(config.min, config.max);

const length = config.columns * config.rows;
const values = Array.from({ length }).map(init);

printHeader(config.columns);
printValues(values, config);
printLegend();
