// a) Exibir no console a posição da letra h na string txt.

let txt = 'abcdefghijklm';
console.log(txt.indexOf('h'));

// b) Exibir no console a palavra bananas, use o método slice.

txt = 'Posso comer bananas o dia todo';
console.log(txt.slice(12, 18));


// c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
txt = 'Olá, mundo';
console.log(txt.replace('Olá', 'Bem vindo'));

// d) Converter o texto em letras maiúsculas e exibir no console.
txt = 'Olá, mundo';
console.log(txt.toUpperCase());

// e) Converter o texto em letras minúsculas e exibir no console.
txt = 'Olá, mundo';
console.log(txt.toLowerCase());

// f) Exibir no console o tamanho da string.
txt = 'Posso comer bananas o dia todo';
console.log(txt.length);

// g) Concatenar as strings e exibir no console.
let str = 'Hello ';
let str2 = 'World';
console.log(str.concat(str2));

// h) Ordenar o array de frutas em ordem alfabética e exibir no console
const fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
console.log(fruits.sort());

// i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
let fruits1 = ['Banana', 'Orange', 'Apple', 'Kiwi'];
fruits1.pop();
fruits1.shift();
console.log(fruits1);

// j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.

let fruits2 = ['Banana', 'Orange', 'Apple'];
fruits2.push('Uva', 'Caju', 'Kiwi');
console.log(fruits2);

// k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.

let fruits3 = ['Banana', 'Orange', 'Apple'];
fruits3.unshift('Pera', 'Manga');
fruits3.pop();
console.log(fruits3);
