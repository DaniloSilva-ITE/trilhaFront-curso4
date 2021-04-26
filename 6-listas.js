console.log("Trabalhando com listas");

const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

console.log("Destinos Possiveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);

// uma lista de variaveis
const listaVarDeDestinos = new Array(salvador, saoPaulo, rioDeJaneiro);
console.log("Destinos Possiveis (var):");
console.log(listaVarDeDestinos);

// um lista de strings
const listaStringsDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro"
);
console.log("Destinos Possiveis (str):");
console.log(listaStringsDeDestinos);

// add item a lista
listaStringsDeDestinos.push("Curitiba");
console.log(listaStringsDeDestinos);

/* remove ultimo item da lista
listaStringsDeDestinos.pop();
console.log(listaStringsDeDestinos);*/

// remove 1 item apartir da pos 2 da lista
listaStringsDeDestinos.splice(2, 1);
console.log(listaStringsDeDestinos);

// imprimi a pos correspondente
console.log(listaStringsDeDestinos[1]);
