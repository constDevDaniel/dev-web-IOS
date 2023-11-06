const btnCalcular = document.querySelector("#calc");
const inpAltura = document.querySelector("#altura");
const inpPeso = document.querySelector("#peso");
const output = document.querySelector("#resultado");
const output2 = document.querySelectorAll("input");

function calcImc() {
	return (imcValue = (inpPeso.value / (inpAltura.value * inpAltura.value)).toFixed(2));
}

function classificacao(imcValue) {
	if (imcValue < 16.9) {
		return "Muito abaixo do peso";
	} else if (imcValue >= 17 && imcValue <= 18.4) {
		return "Abaixo do peso";
	} else if (imcValue >= 18.5 && imcValue <= 24.9) {
		return "Peso normal";
	} else if (imcValue >= 25 && imcValue <= 29.9) {
		return "Acima do peso";
	} else if (imcValue >= 30 && imcValue <= 34.9) {
		return "Obesidade Grau I";
	} else if (imcValue >= 35 && imcValue <= 40) {
		return "Obesidade Grau II";
	} else {
		return "Obesidade Grau III";
	}
}

btnCalcular.addEventListener("click", () => {
	output.innerHTML = `Seu IMC é ${calcImc()} e sua classificação é ${classificacao(calcImc())}`;
});
