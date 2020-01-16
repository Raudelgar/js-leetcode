/** 
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	return s ? s.reverse() : s;
};

/** 
Given a 32-bit signed integer, reverse digits of an integer.
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	if (x === 0) {
		return x;
	} else {
		let str = x.toString();
		let a = str.split('');
		let neg = false;
		let result = 0;

		if (a[0] == '-') {
			neg = true;
			a.shift();
		}
		if (a[a.length - 1] == 0) {
			a.pop();
		}
		result = Number(a.reverse().join(''));

		if (result > Math.pow(2, 31)) {
			return 0;
		} else {
			return neg ? -Math.abs(result) : result;
		}
	}
};

/** 
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let a = s.split('');
	let i = 0;
	let j = 1;
	let duplicate = [];
	let result = -1;

	if (a.length === 0) {
		return -1;
	} else if (a.length <= 2) {
		return a[0] !== a[1] ? 0 : -1;
	}

	while (i < a.length) {
		if (a[i] !== a[j]) {
			result = i;
			j++;
		} else {
			if (!duplicate.includes(a[i])) {
				duplicate.push(a[i]);
			}
			i++;
			j = i + 1;
			result = -1;
		}

		if (j >= a.length) {
			if (result !== -1 && !duplicate.includes(a[result])) {
				return result;
			} else {
				i++;
				j = i + 1;
				result = -1;
			}
		}
	}

	return result;
};

module.exports.reverseString = reverseString;
module.exports.reverse = reverse;
module.exports.firstUniqChar = firstUniqChar;
