/** 
Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
	if (!prices || prices.length === 0 || prices.length === 1) return 0;

	return prices.reduce((acc, curr, i, prices) => {
		let profit = prices[i + 1] > prices[i] ? prices[i + 1] - prices[i] : 0;
		return acc + profit;
	}, 0);
};

/** 
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let unique = null;
	if (nums.length === 1) {
		unique = nums[0];
	} else {
		nums.sort((a, b) => a - b);
		let j = 1;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== nums[j]) {
				if (i === 0) {
					unique = nums[0];
					break;
				} else if (nums[j] !== nums[j + 1]) {
					unique = nums[j];
					break;
				}
			}
			j++;
		}
	}

	return unique;
};

/** 
Given two arrays, write a function to compute their intersection.
Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	if (nums1.length === 0 || nums2.length === 0) return [];

	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	return nums2.filter(n => {
		if (!nums1.includes(n)) return false;

		return nums1.splice(nums1.indexOf(n), 1);
	});
};

/** 
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
			if (digits.length === 1 || i === 0) {
				digits.unshift(1);
			}
		} else {
			digits[i] += 1;
			break;
		}
	}

	return digits;
};

/** 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let len = nums.length;
	let i = 0;
	while (len > 0) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		} else {
			i++;
		}
		len--;
	}

	return nums;
};

exports.maxProfit = maxProfit;
exports.singleNumber = singleNumber;
exports.intersect = intersect;
exports.plusOne = plusOne;
exports.moveZeroes = moveZeroes;
