"use strict";
const frutas = ["  Banana", "Maçã", "Pera", "Uva", "Melancia"];

// const frutas = prompt("Digite uma fruta: ");

document.writeln(frutas + "<br>");
document.writeln(frutas.length + "<br>");

document.writeln(frutas[1].substring(0, 3) + "<br>");

document.writeln(frutas[0].trim() + "<br>");

document.writeln(frutas.map((fruta) => `${fruta.toLowerCase()}`));
