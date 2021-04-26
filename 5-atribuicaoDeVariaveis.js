console.log("Trabalhando com atribuicao de variaveis");

// const nao pode muda dps let sim
let nome = "Danilo"
const sobrenome = "Silva"
const idade = 19;

console.log("nome:",nome);
console.log("nome:",sobrenome);
console.log("idade:",idade);

// testando print de strings
console.log(nome + sobrenome); // DaniloSilva
console.log(nome, sobrenome); // Danilo Silva
console.log(nome+" "+sobrenome); // Danilo Silva
console.log(nome,"da",sobrenome); // Danilo da Silva

// usa a crase
console.log(`Meu nome é ${nome} ${sobrenome}`);

// juntando strings
nome = nome + sobrenome;
console.log(nome);

// mudando var string para num
nome = 2;
console.log(nome);
