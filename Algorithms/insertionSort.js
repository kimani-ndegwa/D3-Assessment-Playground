/**
 *
 * @param {*} array
 * Takes each element and attempts to compare it to the previous element.
 */

const insertionSort = array => {
  // Starting point for the loop.
  let position = 0;

  for (position; position < array.length; position++) {
    let currentItem = array[position];
    let nextItem = array[position + 1];
    let previousPosition = position - 1;

    while (previousPosition > -1 && array[previousPosition] > currentItem) {
      array[previousPosition + 1] = array[previousPosition];
      previousPosition = previousPosition - 1;
    }

    array[previousPosition + 1] = currentItem;
  }

  return array;
};

module.exports = insertionSort;
