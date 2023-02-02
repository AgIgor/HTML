const nome = document.querySelector('#inNome');
const idade = document.querySelector('#inIdade');

const idadeUnidade = document.querySelectorAll('input[name="tipoIdade"]');
let tipoIdade = null;


const cor = document.querySelector('#inCor');
const raca = document.querySelector('#inRaca');
const pelo = document.querySelector('#inPelo');
const peso = document.querySelector('#inPeso');

const pesoUnidade = document.querySelectorAll('input[name="tipoPeso"]');
let tipoPeso = null;


const btnSalvar = document.querySelector('#btnSalvar');


// for(const i of idadeUnidade){
// 	i.addEventListener('change', function(e){
// 		console.log(this.value);
// 	});
// }  




idadeUnidade.forEach(element => {
	element.addEventListener('change', function(e){
		// console.log(this.value);
		tipoIdade = this.value;

	})
});



pesoUnidade.forEach(element => {
	element.addEventListener('change', function(e){
		// console.log(this.value);
		tipoPeso = this.value;
	})
});


btnSalvar.addEventListener('click', function(e){
	const nomeStr = nome.value
	const idadeStr = idade.value
	const corStr = cor.value
    const racaStr = raca.value
	const peloStr = pelo.value
    const pesoStr = peso.value

	console.log(nomeStr, idadeStr,tipoIdade, corStr, racaStr, peloStr, pesoStr, tipoPeso);


})
