
// how does it work?

/*  
  0(initialized value) + 1 (array's first value) = 1 --->
  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10
  10 + 5 = 15
  15 + 6 = 21
*/


let myNums = [1, 2, 3, 4, 5,6];
const newArr = myNums.reduce((acc, num) => (acc + num), 0);

console.log(`Example # 1  (${newArr})`);



//   reduce more examples 

function calculateAvg(nums) {
    if (nums.length === 0) return 0;
    let sum = nums.reduce((acc, nums) => acc + nums, 0);
    let avg = sum / nums.length;
    let result = Math.round(avg * 100) / 100;
    return result;
}
let numsArr = [19.6, 24, 87.44, 98, 20];

console.log(`Example # 2 (${calculateAvg(numsArr)})`);


