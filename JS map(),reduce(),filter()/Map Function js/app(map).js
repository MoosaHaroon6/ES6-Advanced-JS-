// Example # 1 (a)

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = myNums
    .map(function (nums) {
        return nums + 10
    }
    )
    .map((nums) => (
        nums / 2
    ))
    .map((nums) => {
        return nums * 3;
    })
    .map((nums) => Math.round(nums))
    .filter((nums) => {
        if (nums % 2 === 0) {
            console.log(`${nums} is even.`);
            return true;
        } else {
            console.log(`${nums} is odd.`);
        }
    });

//
// console.log(`ECMA 5 Function :`, newArr);







// Example # 1 (b)

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = myNum.map((nums) =>
    (nums + 10)
);

// console.log(`ECMA 6 Function`, newArray);




