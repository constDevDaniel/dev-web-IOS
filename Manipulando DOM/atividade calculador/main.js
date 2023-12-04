function calcular() {
	let altura = Number(document.querySelector("#altura").value);
	let peso = Number(document.querySelector("#peso").value);
	let resultado = document.querySelector("#res");
	let tabela = document.querySelector("#tabela1");

	let imc = peso / (altura * 2);

	if (altura == 0 && peso == 0) {
		window.alert("ERRO, digite um valor correto");
	} else {
		if (imc < 18.5) {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso, verifique a tabela abaixo.`;
		} else if (imc > 18.5 && imc <= 24.9) {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está no peso normal, verifique a tabela abaixo.`;
		} else if (imc >= 25 && imc <= 29.9) {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está acima do peso, veja a tabela abaixo`;
			tabela.src = "tabela-imc.png";
		} else if (imc >= 30 && imc < 35) {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está com Obesidade tipo 1, veja a tabela abaixo`;
		} else if (imc > 35 && imc < 40) {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está com Obesidade tipo 2, veja a tabela abaixo`;
		} else {
			resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, você está com Obesidade tipo 3, veja a tabela abaixo`;
		}
		tabela.src = "tabela-imc.png";
	}
}
