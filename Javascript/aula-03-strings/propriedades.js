"use strict";

let valor01 = 100;
const valor02 = 5;
console.log(
	"A multiplicação de " +
		valor01 +
		" por " +
		valor02 +
		" é " +
		valor01 * valor02
);
console.log(
	`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`
);

console.clear();
const string01 = "    Instituto da Oportunidade Social \n    ";

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
