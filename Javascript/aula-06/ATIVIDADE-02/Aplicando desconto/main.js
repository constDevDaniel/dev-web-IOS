const valorProduto = prompt("informe o valor do produto");
const cupom = prompt("e informe um código promocional").toLocaleUpperCase();

switch (cupom) {
	case "DESC1":
		alert(
			`O Valor original é ${valorProduto} aplicando o desconto fica ${
				valorProduto - 0.05 * Number(valorProduto)
			}`
		);
		break;
	case "DESC2":
		alert(
			`O Valor original é ${valorProduto} aplicando o desconto fica ${
				valorProduto - 0.1 * Number(valorProduto)
			}`
		);
		break;
	case "DESC3":
		alert(
			`O Valor original é ${valorProduto} aplicando o desconto fica ${
				valorProduto - 0.15 * Number(valorProduto)
			}`
		);
		break;
	case "DESC4":
		alert(
			`O Valor original é ${valorProduto} aplicando o desconto fica ${
				valorProduto - 0.2 * Number(valorProduto)
			}`
		);
		break;
	case "DESC5":
		alert(
			`O Valor original é ${valorProduto} aplicando o desconto fica ${
				valorProduto - 0.25 * Number(valorProduto)
			}`
		);
		break;
	default:
		alert("informe um codigo promocional valido");
}

