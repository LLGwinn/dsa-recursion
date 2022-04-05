/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
    if (i === nums.length) return 1;
    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, max=0, i=0) {
  if (i === words.length) return max;
  if (words[i].length > max) {
    return longest(words, words[i].length, i + 1)
  } else return longest( words, max, i + 1)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr='', i=0) {
  if (i === str.length || i === str.length - 2) return newStr + str[i];
  if (i > str.length) return newStr;
  newStr += str[i];
  return  everyOther(str, newStr, i + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, startIdx=0, endIdx=str.length - 1, answer=true) {
  if (!answer) return false;
  if (startIdx >= endIdx) return true;
  answer = str[startIdx] === str[endIdx];
  return isPalindrome(str, startIdx + 1, endIdx - 1, answer)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr='', i=str.length-1) {
  if (i < 0) return newStr;
  newStr += str[i];
  return revString(str, newStr, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArr=[]) {
  for (let item in obj) {
    if (typeof obj[item] === 'string') strArr.push(obj[item]);
    else if (typeof obj[item] === 'object') gatherStrings(obj[item], strArr);
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

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
