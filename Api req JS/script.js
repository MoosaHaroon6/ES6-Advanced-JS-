// AJAX 

const reqURL = "https://api.github.com/users/moosaharoon6"
const xhr = new XMLHttpRequest();

xhr.open('GET', reqURL);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        console.log(data.followers);
    }
}

xhr.send()