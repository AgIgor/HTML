const url = 'ws://192.168.15.10:81/'
const socket = new WebSocket(url);

window.addEventListener('load', (e) => {
    dest.innerText = url
})
// window.onload = (event) => {
//     dest.innerText = url
// }

socket.addEventListener('open', (event) => {
    socket.send('Olá Server!');
    console.log(event)
});
// socket.onopen = function (event) {
//     socket.send('Hello Server!');
// };


socket.addEventListener('message', (event) => {
    console.log('Recebido do ESP => ', event.data);
    saida.innerText = event.data
});
// socket.onmessage = function (event) {
//     // console.log('ESP => ', event.data);
//     saida.innerText = event.data
// };


socket.addEventListener('error', (event) => {
    console.log('Error: ', error);
})
// socket.onerror = function (error) {
//     saida.innerText = error
// };


socket.addEventListener('close', (event) => {
    console.log('Server connection closed with code: ', event.code);
})
// socket.onclose = function (event) {
//     saida.innerText = event.code
// };


btn.addEventListener('click', (event) => {
    const valor = txt.value
    socket.send(valor);
    txt.value = ""
})
// btn.onclick = (event) => {
//     const valor = txt.value
//     socket.send(valor);
//     txt.value = ""
// }

setInterval(() => {
    hora = new Date().toLocaleTimeString()
    clock.innerHTML = hora
    socket.send(hora)
}, 1000);
