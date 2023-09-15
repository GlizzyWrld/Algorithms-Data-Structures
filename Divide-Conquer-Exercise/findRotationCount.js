// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] <= arr[right]) return 0;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] > arr[middle + 1]) {
      return middle + 1;
    }

    if (arr[left] <= arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return 0;
}

// Examples:

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
