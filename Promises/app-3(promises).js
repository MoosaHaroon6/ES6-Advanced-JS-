/*Promise*/

let treat = new Promise(function (resolve, reject) {
    let isNotesAvail = confirm('have you produced english notes');
    if (isNotesAvail) {
        let foodWish = prompt('what do you want to eat?');
        resolve(foodWish);
    }
    else {
        reject("ainda bat ni krna");
    }
});

treat
    .then(function (foodItem) {
        console.log(`You are my true friend, ${foodItem} is due on me.`);
    })
    .catch(function (w) {
        console.log('you are not my true friend.', w);
    });



console.log(treat);    