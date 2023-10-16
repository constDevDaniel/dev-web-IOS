const frutas = prompt("Digite uma fruta: ");

console.log(frutas);
console.log(frutas.length);

console.log(frutas[0].substring(0, 3));

console.log(frutas[0].trim());

console.log(frutas.map(fruta => `fruta: ${fruta.toLowerCase()}`));
