const quickSort = array => {
  // Taking the pivot as the last element.
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.pop();
  let position = 0;

  let result = []; // This will hold the final array.

  // This will hold both the left side and right side of the corresponding data.
  let leftSide = [];
  let rightSide = [];

  for (position; position < array.length; position++) {
    let value = array[position];
    if (array[position] <= pivot) {
      leftSide.push(value);
    } else {
      rightSide.push(value);
    }
  }

  // Recursive
  return result.concat(quickSort(leftSide), pivot, quickSort(rightSide));
};

module.exports = quickSort;
