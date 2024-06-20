/**
 *
 * @param {number[]} values
 * @param {{start: number, end: number}} config
 * @returns {number}
 */
export function findRepeatRateCount(values, { start, end }) {
  let deviation = 0;
  let changes = 0;

  for (let index = start; index < end; ++index) {
    const element = values[index];

    // negative side
    if (element < 0) {
      if (deviation > 0) {
        deviation = -1;
      } else {
        --deviation;
      }

      if (deviation <= -3) {
        deviation = 1;
        ++changes;
      }
    }

    // positive side
    else {
      if (deviation < 0) {
        deviation = 1;
      } else {
        ++deviation;
      }

      if (deviation >= 3) {
        deviation = -1;
        ++changes;
      }
    }
  }

  return changes;
}
