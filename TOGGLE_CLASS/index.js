function toggleCard(element) {
    element.classList.toggle('invisible');
}

window.onload = function () {
    console.log('ready')
}


const promessa = new Promise((response, reject) => {
    setTimeout(() => {
        response()
    }, 5000)

})

promessa
    .then(() => {
        console.log('pass')
    })
    .catch(err => {
        console.log(err)
    })

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))




function myFunction() {
    return Promise.resolve("rej");
}
myFunction().then(
    function (value) { console.log(value); },
    function (error) { console.log(error); }
)