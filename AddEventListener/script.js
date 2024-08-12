

// document.getElementById("headings").addEventListener('click', function (e) {
//     console.log("hello-1");
// },false);

// document.getElementById("h-3").addEventListener('click', function(e) {
//     console.log(`hello-2`);
//     // e.stopPropagation()
// },false);





document.getElementById("headings").addEventListener('click', function (e) {
    // console.log("hello-1");
    // this.className = "hide"
    console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode.childeNode
    // removeIt.remove()
    e.target.remove()
});

// document.getElementById("h-3").addEventListener('click', function (e) {
//     e.stopPropagation()
//     console.log(e.target.parentNode);

    // this.className = "hide"
// });


