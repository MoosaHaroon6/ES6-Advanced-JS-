// ES5 function







// Example # 1  

// function square2(num1) {
//     return num1 * num1;
// }
// console.log(`ES5 function :`, square2(7));







// Example # 2 

/* 
 this function is only applicable on ES5 function (old method)
*/
// function arguments() {
//     console.log(arguments);
// }
// arguments("Moosa", "haroon")
// arguments(12, 21)






// ES6 function






// Example # 1   (arrow function)

// let square = (num1) => {
//     return num1 * num1;
// }
// console.log(`ES6 function :`, square(7));








// Example # 2

// function addToCart() {
//     product = {
//         name: "Laptop",
//         model: "core i6",
//         price: "24999"
//     }
//     console.log(this.product);

// }
// addToCart()




// Example # 3 (not applicable for arrow function)

/*
   Description:
   Arrow function does not support arguments method.
   It will throw error and won't work on browser.
   */

/*let noArguments = () => {            /*  ERROR ::
                                    Uncaught ReferenceError: arguments is not defined
                                     at noArgument */
//     console.log(arguments);
// }
// noArguments("Moosa", "haroon")
// noArguments(12, 21)








// Example # 4 (complex function)
//    (not applicable)


// const complexFig = (a, b) => {
//     if (a > b) {
//         return a - b;
//     }
//     else {
//         return b - a;
//     }
// };
// complexFig(4,9);






