//Leetcode: Easy

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false
 
// Constraints:
// -231 <= x <= 231 - 1


//PSUEDO
//convert to string
//loop from end
//compare pointers
const isPalindrome = (x: number) : boolean => {
	const s = x + "";
	const mid = Math.ceil(s.length / 2)
	let start = 0;
	let end = s.length - 1;
	while(start <= end){
		if(s[start] !== s[end]){
			return false
		}
		start += 1;
		end -= 1;
	}
	return true
}

console.log(isPalindrome(-121))
console.log(isPalindrome(121))
console.log(isPalindrome(1221))
console.log(isPalindrome(11121))

