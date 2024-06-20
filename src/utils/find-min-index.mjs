/**
 *
 * @param {number[]} values
 * @returns {number}
 */
export function findMinIndex(values) {
  if (values.length <= 0) {
    return -1;
  }

  let minimal = 0;

  for (let current = 1; current < values.length; ++current) {
    if (values[minimal] > values[current]) {
      minimal = current;
    }
  }

  return minimal;
}
