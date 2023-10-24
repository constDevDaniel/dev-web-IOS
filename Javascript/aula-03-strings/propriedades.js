"use strict";

/**
 * Crie uma função
 *
 */

let valor01 = 100;
const valor02 = 5;
console.log(
	"A multiplicação de " +
		valor01 +
		" + " +
		valor02 +
		" é " +
		valor01 +
		valor02
);
// console.log(`A SOMA de ${valor01} por ${valor02} é ${valor01 + valor02}`);

console.clear();
const string01 = "    Instituto da Oportunidade Social \n    ";

const verdadeiroOuFalso = false;

let pi;
pi = 3.1415;
console.log(pi);

let nome = prompt("informe o seu nome");
const idade = prompt("informe a sua idade");
const bairro = prompt("informe o bairro onde mora");

nome = nome.toLocaleUpperCase();

const n1 = Number(prompt("digite um numero"));
const n2 = Number(prompt("digite outro numero"));
alert(`O Resultado da soma de ${n1} + ${n2} é ${n1 + n2}`);

let meuNome = "Daniel dos Santos Azoulay";
meuNome = meuNome.replace("Santos", "Azoulay");
alert(meuNome);

console.log(string01.charAt(0));
console.log(string01[0]);

console.log(string01.charAt(10));
console.log(string01[10]);

console.log(string01.length);

console.log(string01.toUpperCase());
console.log(string01.toLowerCase());

console.log(string01.substring(1, 3)); //final não incluso
console.log(string01.substring(2));

console.clear();
const palavras = string01.split(" ");
console.log(palavras[3]);

const chars = string01.split("");
console.log(chars[7]);

const strCopy = string01.split(); //colocar a string em um array
console.log(strCopy);

console.clear();

let novaMensagem = string01.replace("Oportunidade", "IOS");
console.log(novaMensagem);

console.log(string01.trim()); //remove espaços em branco

console.clear();

console.log(string01.indexOf("Oportunidade"));
console.log(string01.lastIndexOf("Oportunidade"));
console.log(string01.search("Oportunidade"));

console.log(string01.startsWith("a"));
console.log(string01.endsWith("!"));
