const funcionarios = [
	{
		nome: "wally",
		salario: 4800,
	},
	{
		nome: "daniel",
		salario: 2000,
	},
	{
		nome: "tanos",
		salario: 5000,
	},
	{
		nome: "manson",
		salario: 2000,
	},
	{
		nome: "joni",
		salario: 1200,
	},
];

funcionarios.forEach((funcionario) => {
	console.log(funcionario.nome);
});

const novoSalario = funcionarios
	.map((funcionario) => {
		return {
			nome: funcionario.nome,
			salario: funcionario.salario + funcionario.salario * 0.05,
		};
	})
	.filter((funcionario) => {
		return funcionario.salario > 5000;
	})
	.find((targetFuncionario) => {
		return targetFuncionario.nome === "wally";
	});

console.log(novoSalario);
