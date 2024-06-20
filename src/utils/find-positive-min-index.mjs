/**
 *
 * @param {number[]} values
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
export function findPositiveMinIndex(values, start, end) {
  // todo remove copy
  const array = values.slice(start, end);

  let minimal = array.findIndex((e) => e >= 0);
  if (minimal == -1) {
    return -1;
  }

  for (let current = 1; current < array.length; ++current) {
    if (array[current] < 0) {
      continue;
    }

    if (array[minimal] > array[current]) {
      minimal = current;
    }
  }

  return start + minimal;
}
