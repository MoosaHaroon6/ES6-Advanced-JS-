const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise one completed');
        resolve()
    }, 1000);
}).then(() => {
    // setTimeout(() => {
    console.log('Promise is Consumed seccessfully');
    // }, 1000);
})





new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            userName: 'moosa__nov',
            userEmail: 'musastackoverflow@gmail.com'
        })
    }, 1000);
}).then((user) => {
    console.log(user);
})









const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = true;
        let error = false;
        if (!error) {
            resolve(
                {
                    username: 'Moosa',
                    email: 'something@gmail.com'
                }
            );
        }
        else {
            reject('Something went wrong');
        }
    }, 2000);
})
    .then((user) => {
        return user;
    })
    .then((user) => {
        console.log(user.username);
        return user.email;
    })
    .then((useremail) => {
        console.log(useremail);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('Either it is resolved or rejected'))







// async (another approach)



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = true;    
        let error = false;
        if (!error) {
            resolve(
                {
                    username: 'Js',
                    email: 'Javascript@gmail.com'
                }
            );
        }
        else {
            reject('Something went wrong');
        }
    }, 2000);
})

async function consumedPromiseFour() {
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFour()