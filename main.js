const codeArr = require('./codeArrays.js');
const codeStr = require('./codeStrings.js');

console.log('******     ARRAYS  *******');
console.log(codeArr.maxProfit([7, 1, 5, 3, 6, 4])); // Result: 7
console.log(codeArr.maxProfit([1, 2, 3, 4, 5])); // Result: 4
console.log(codeArr.maxProfit([7, 6, 4, 3, 1])); // Result: 0

console.log(codeArr.singleNumber([2, 2, 1])); //1
console.log(codeArr.singleNumber([4, 1, 2, 1, 2])); //4
console.log(codeArr.singleNumber([1, 3, 1, -1, 3])); //-1

console.log(codeArr.intersect([3, 1, 2], [1, 1])); //[1]
console.log(codeArr.intersect([1, 2, 2, 1], [2, 2])); //[2,2]
console.log(codeArr.intersect([4, 9, 5], [9, 4, 9, 8, 4])); //[4,9]
console.log(codeArr.intersect([1, 2, 2, 1], [2])); //[2]

console.log(codeArr.plusOne([1, 2, 3])); //[1,2,4]
console.log(codeArr.plusOne([4, 3, 2, 1])); //[4,3,2,2]
console.log(codeArr.plusOne([9])); //[1,0]
console.log(codeArr.plusOne([9, 9, 9, 9])); //[1,0,0,0,0]

console.log(codeArr.moveZeroes([0, 1, 0, 3, 12])); //[ 1, 3, 12, 0, 0 ]
console.log(codeArr.moveZeroes([0, 0, 1])); //[ 1, 0, 0 ]

console.log(
	codeArr.rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])
); //[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

console.log('******     STRINGS  *******');
console.log(codeStr.reverseString(['h', 'e', 'l', 'l', 'o'])); //[ 'o', 'l', 'l', 'e', 'h' ]
console.log(codeStr.reverse(123)); //321
console.log(codeStr.reverse(-123)); //-321
console.log(codeStr.reverse(120)); //21
console.log(codeStr.reverse(2147483648)); //0
console.log(codeStr.firstUniqChar('leetcode')); //0
console.log(codeStr.firstUniqChar('aadadaad')); //-1
console.log(codeStr.firstUniqChar('loveleetcode')); //2
console.log(codeStr.firstUniqChar('')); //-1
console.log(codeStr.firstUniqChar('a')); //0
console.log(codeStr.firstUniqChar('dddccdbba')); //8
console.log(codeStr.firstUniqChar('aaadd')); //-1
