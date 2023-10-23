function recebeNumeros() {
	let numeroJogador = Number(prompt("digite um numero de 0 a 10"));
	let numeroMaquina = Math.floor(Math.random() * 10);
	console.log(numeroJogador, numeroMaquina);
	while (numeroJogador !== numeroMaquina) {
		alert(
			`Tente novamente você digitou ${numeroJogador} mas o número da maquina foi ${numeroMaquina}, tente novamente`
		);
		recebeNumeros();
	}
	return alert('Parabéns você acertou');
}

recebeNumeros();
