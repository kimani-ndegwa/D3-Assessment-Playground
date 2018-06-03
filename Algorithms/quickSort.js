const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let result = []; // This will hold the final array.
  // This will hold both the left side and right side of the corresponding data.
  let leftSide = [];
  let rightSide = [];
  // Taking the pivot as the last element.
  let pivot = array.pop();

  array.forEach(element => {
    if (element < pivot) {
      leftSide.push(element);
    } else {
      rightSide.push(element);
    }
  });

  // Recursive
  return result.concat(quickSort(leftSide), pivot, quickSort(rightSide));
};

module.exports = quickSort;
