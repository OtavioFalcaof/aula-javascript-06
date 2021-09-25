// 1) Criar 3 variáveis:
// a) A primeira variável deverá conter o seu nome. 
// b) A segunda variável deverá conter a sua idade.
// c) Converter a segunda variável para string.
// d) A terceira variável deverá conter a concatenação das duas variáveis anteriores.
// e) Exibir no console a terceira variável.
// f) Exibir no console o tamanho da terceira variável.

let name = 'Otávio';
let idade = 22;
let parsedIdade = String(idade);
console.log("Idade : "+parsedIdade);

let concatenacao = name + idade;
console.log(concatenacao,"", concatenacao.length);


// 2) Criar 2 variáveis:
// a) A primeira variável deverá conter o valor 17.
// b) A segunda variável deverá conter o valor 28.
// c) Converter os valores das duas variáveis
// d) Exibir no console a terceira variável.

let numberOne = 17;
let numberTwo = 28;
const parsedNumbers = numberOne.toString() + numberTwo.toString();
console.log(parsedNumbers);



