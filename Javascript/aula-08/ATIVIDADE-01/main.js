"use strict";
function calcIMC(peso, altura) {
	const IMC = (peso / altura ** altura).toFixed(1);
	console.log(IMC);
	if (IMC <= 16.9) {
		console.log("Muito abaixo do peso");
	} else if (IMC >= 17 && IMC <= 18.4) {
		console.log("Abaixo do peso");
	} else if (IMC >= 18.5 && IMC <= 24.9) {
		console.log("Peso normal");
	} else if (IMC >= 25 && IMC <= 29.9) {
		console.log("Acima do peso");
	} else if (IMC >= 30 && IMC <= 34.9) {
		console.log("Obesidade grau 1");
	} else if (IMC >= 35 && IMC <= 40) {
		console.log("Obesidade grau 2");
	} else if (IMC > 40) {
		console.log("Obesidade grau 3");
	}
}

calcIMC(60, 1.75);