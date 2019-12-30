const codeArr = require('./codeArrays.js');

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
