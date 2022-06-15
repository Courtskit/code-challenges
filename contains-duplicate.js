// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDupe(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])){
      return true;
    }
    map.set(arr[i], i)
  }
  return false;
}
console.log(containsDupe([1,2,3,1]))
console.log(containsDupe([2,3,4,5,6]))
console.log(containsDupe([2,3,4,5,4,6]))
console.log(containsDupe([2,3,4,5,4,2,5,5,5,6]))
