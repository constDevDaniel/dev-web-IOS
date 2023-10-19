const numeroJogador = Number(prompt("digite um numero de 0 a 10"));
const numeroMaquina = Math.floor(Math.random() * 10);

console.log(numeroMaquina);

while (numeroJogador != numeroMaquina) {}
