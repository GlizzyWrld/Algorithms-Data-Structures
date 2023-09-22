function merge(arr1, arr2) {
    const result = [];

    //start with a pointer for each arr 
    let i = 0;
    let j = 0;

    // while elements in arr to check
    while (i < arr1.length && j < arr2.length) {
        //if element in first array smaller, add to result. Else add element from second array
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    // if there's remaining elements in first array, add to result
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // if there's remaining elements in second array, add to result
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(merge(arr1, arr2)); 




function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle)
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)
}

const arr = [5, 1, 4, 2, 8, -10];
console.log('Before sorting:', arr);

const sortedArr = mergeSort(arr);
console.log('After sorting:', sortedArr);


module.exports = { merge, mergeSort};