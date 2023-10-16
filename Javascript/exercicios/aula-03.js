const frutas = [' banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
console.log(frutas.length);

console.log(frutas[0].substring(0,3));


console.log(frutas[0].trim());

console.log(frutas.map(fruta=> {
    return `fruta: ${fruta.toLowerCase()}`
}))