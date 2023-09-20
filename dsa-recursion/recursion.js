/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(product(numbers));

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  const currLength = words[0].length;

const recMaxLength = longest(words.slice(1));
return Math.max(currLength, recMaxLength);
}

const words = ["jim", "peter", "sara", "michael"];
// console.log(longest(words));

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  
  const everyOth = str[0] + everyOther(str.slice(2));
  return everyOth
}
// console.log(everyOther('Michael'));

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length -1]) return false;
  
  const isPali = isPalindrome(str.slice(1, str.length - 1));
  return isPali
}
// console.log(isPalindrome('Michael'));
// console.log(isPalindrome('Hannah'));

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

let newNumbers = [7, 6, 2 , 8, 9, 17, 18,]
// console.log(findIndex(newNumbers, 17))
// console.log(findIndex(newNumbers, 19))

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  let reversed = str[str.length - 1] + revString(str.slice(0, str.length - 1));
  return reversed
}
// console.log(revString("popsicle"))

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}
// console.log(gatherStrings({
//   dog: "woof",
//   cat: "meow",
//   cow: "moo",
//   snake: "ssss",
//   bird: true,
//   plane: {
//     canFly: "yes can fly",
//     isFast: "superFast",
//     model: 1999
//   }
// }))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === val) return mid;
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, high);
  return binarySearch(arr, val, low, mid - 1);
}

const cool = [1, 2, 3, 4, 7, 34, 36, 38, 39,]

console.log(binarySearch(cool, 38))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
