//  https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
  return false;
};

console.log(twoSum([2,7,11,15], 9));

console.log(twoSum([3,3], 6));

console.log(twoSum([0], 6));

console.log(twoSum([0, 5, 1, 8], 13));