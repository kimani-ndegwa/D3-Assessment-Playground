// First satisfy the max heap property.
// Root node must be the maximum.
// Relationship between array indexes and tree elements.

const heapify = (array, i, max) => {
  let index, leftChild, righChild;

  while (i < max) {
    index = i;

    // Ref: https://www.programiz.com/dsa/heap-sort
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
  // In a complete tree the first index of a non-leaf node is given by this.
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
  let lastElement = array.length - 1;

  // Continue array sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    swap(array, 0, lastElement);

    heapify(array, 0, lastElement);

    lastElement--;
  }

  return array;
};

module.exports = heapSort;
