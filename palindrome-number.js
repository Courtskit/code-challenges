// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
  if (x % 10 === 0 && x !== 0) return false;
  if (x < 0) return false;

  let reversed = 0;

  while ( x > reversed ) {
    reversed = reversed * 10 + ( x % 10 )
    x = Math.floor( x / 10 )
  }

  return x === reversed || (Math.floor(reversed / 10 ) === x);
};


// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
console.log(isPalindrome(121) === true)

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
console.log(isPalindrome(-121) === false)

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
console.log(isPalindrome(10) === false)