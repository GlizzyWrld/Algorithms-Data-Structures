// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

function sortedFrequency(arr, val) {
    left = 0;
    right = arr.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        
        if (arr[middle] < val) {
            left = middle + 1; 
        }
        else if (arr[middle] > val) {
            right = middle - 1;
        } else {
            break;
        }
    }

    if (arr[middle] !== val) {
        return -1; 
    }

    let first = middle;
    while (first > 0 && arr[first -1] === val) {
        first--;
    }

    let last = middle;
    while (last < arr.length -1 && arr[last +1] === val) {
        last++;
    }

    return last - first + 1;
}



// Examples:
console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1