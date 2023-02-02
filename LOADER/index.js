const slider = document.querySelector('.slider');
const loader = document.querySelector('.loader');


slider.oninput = function(){
    console.log(slider.value);
    valor = slider.value
    loader.setAttribute('style', `background-image:linear-gradient(0deg, red ${valor}%, transparent 1%);`)
}
