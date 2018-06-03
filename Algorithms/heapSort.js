// First satisfy the max array property/
// Root node must be the maximum.

const heapify = (array, i, max) => {
  let index, leftChild, righChild;

  while (i < max) {
    index = i;

    leftChild = 2 * i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && array[leftChild] > array[index]) {
      index = leftChild;
    }

    if (righChild < max && array[righChild] > array[index]) {
      index = righChild;
    }

    if (index == i) {
      return;
    }

    swap(array, i, index);

    i = index;
  }
};

const swap = (array, firstItemIndex, lastItemIndex) => {
  var temp = array[firstItemIndex];

  // Swap first and last items in the array.
  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = temp;
};

const getMaxArray = array => {
  // The array here is interchangeably used to refer to our heap.

  let i = Math.floor(array.length / 2 - 1);

  // Build a max array out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
};

const heapSort = array => {
  getMaxArray(array);

  // Find last element.
  lastElement = array.length - 1;

  // Continue array sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    swap(array, 0, lastElement);

    heapify(array, 0, lastElement);

    lastElement -= 1;
  }

  return array;
};

module.exports = heapSort;