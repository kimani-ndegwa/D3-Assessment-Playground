// Split this functionality into two calls that separately
// Allow the call to be made recursively.

const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }
  // Split the array into two halves
  // Round down in case half is not a whole number

  let midPoint = Math.floor(array.length / 2);
  // Slice to get two lists

  let leftSide = array.slice(0, midPoint);
  let rightSide = array.slice(midPoint);

  return mergeArrays(mergeSort(leftSide), mergeSort(rightSide));
};

const mergeArrays = (leftSide, rightSide) => {
  let finalArray = [];

  let startLeft = 0;
  let startRight = 0;

  while (startLeft < leftSide.length && startRight < rightSide.length) {
    if (leftSide[startLeft] < rightSide[startRight]) {
      finalArray.push(leftSide[startLeft]);
      startLeft++;
    } else {
      finalArray.push(rightSide[startRight]);
      startRight++;
    }
  }
  return finalArray
    .concat(leftSide.slice(startLeft))
    .concat(rightSide.slice(startRight));
};

module.exports = mergeSort;
