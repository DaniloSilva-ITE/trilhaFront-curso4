console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
	console.log("Comprador maior de idade");
	listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
	console.log("Comprador esta acompanhado");
	listaDeDestinos.splice(1, 1);
} else {
	console.log(
		"Comprador menor de idade e nao esta acompanhado, não posso vender"
	);
}

console.log(listaDeDestinos);
