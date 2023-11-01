const alunos = [
	{
		nome: "João",
		notas: [7.3, 6.0, 4.5, 8.0],
		bolsista: false,
		enderecos: ["rua da gloria", "av mazzei"],
	},
	{
		nome: "Maria",
		notas: [9.3, 7.0, 7.5, 8.0],
		bolsista: true,
		enderecos: ["rua octavio miranda", "av aruja"],
	},
];

alunos.forEach((aluno) => {
	//reduzindo o array de notas, somando todas as notas que o aluno teve
	const media =
		aluno.notas.reduce((total, nota) => total + nota) / aluno.notas.length;
	console.log(
		`Aluno(a) ${aluno.nome} com notas ${
			aluno.notas
		} mora em tal endereço  e teve a média ${media}, e foi ${
			media >= 7 ? "Aprovado" : "Reprovado"
		}`
	);
});
