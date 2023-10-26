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
	{
		nome: "Pedro",
		notas: [9.8, 6.0, 9.5, 4.0],
		bolsista: false,
		enderecos: ["avenida jabaquara", "travessa toledo de moraes"],
	},
];

for (let i = 0; i < alunos.length; i++) {
	const medias =
		alunos[i].notas.reduce((acumulador, atual) => acumulador + atual) /
		alunos[i].notas.length;

	const alunosAprovados = [];

	alunos.push({
		nome: alunos[i].nome,
		notas: alunos[i].notas,
		media: medias.toFixed(1),
	});

    alunos.filter(aluno => {
        console.log(aluno.media >= 7)
    })

    // console.log(`
	//         Aluno ${alunos[i].nome} com notas ${alunos[i].notas
	// 	.join(" ")
	// 	.split(" ")}, teve a média ${medias.toFixed(1)}
	//     `);
}
