const frutas = ['pera', 'maça', 'banana']

// usar foreach quando for necessario usar varias vezes no codigo
frutas.forEach((fruta, index) => console.log(fruta, index))
console.clear();

const tarefas = [
	{
		id: 1,
		texto: "levar o lixo para fora",
		isCompleted: true,
	},
	{
		id: 2,
		texto: "Reunião com chefe",
		isCompleted: true,
	},
	{
		id: 3,
		texto: "Consulta no dentista",
		isCompleted: false,
	},
];


tarefas.forEach(tarefa => console.log(tarefa.id,tarefa.texto))