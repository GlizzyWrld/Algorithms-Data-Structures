// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:


function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
   
    while (left <= right) {
        let middle = Math.floor((left + right) / 2 );
        if (arr[middle] === num) {
            return middle;
        }
        
        if (arr[left] <= arr[middle]) {
            if (num >= arr[left] && num < arr[middle]) {
                right = middle -1;
            } else {
                left = middle + 1;
            }
        } else {
           if (num > arr[middle] && num <= arr[right]) {
            left = middle + 1;
           } else {
            right = middle -1;
           }
        }
    }
    return -1
}

console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,14,22],14)) // 5
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1



