function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        //check if a swap occurred
        let swap = false;

        // second loop, ignores last i elements if sorted
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //check if current element greater than the next element, if so swap
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

const nums = [7, 6, 8, 15, 46, 17, 13, 43]
console.log('Before sorting:', nums);
const sortedArr = bubbleSort(nums);
console.log('After sorting:', sortedArr);


module.exports = bubbleSort;