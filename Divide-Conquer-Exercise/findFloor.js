// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Constraints

// Time Complexity: O(log N)


function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1


    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] <= x) {
            floor = arr[middle];
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return floor;
}



// Examples:

console.log(findFloor([1,2,8,10,10,12,19], 9) )// 8
console.log(findFloor([1,2,8,10,10,12,19], 20)) // 19
console.log(findFloor([1,2,8,10,10,12,19], 0) )// -1
