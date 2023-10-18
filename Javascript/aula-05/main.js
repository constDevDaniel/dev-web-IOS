// for (let i = 0; i < 5; i++) {
// 	let p = document.createElement("p");
// 	document.body.appendChild(p);
// 	p.innerHTML = "Linha " + i;
// }

const todos = [
    { id: 1, text: "Fazer café", done: false },
    { id: 2, text: "Estudar Javascript", done: false },
    { id: 3, done: true }
]

// for (let i = 0; i < todos.length; i++) {
// 	let p = document.createElement("p");
// 	document.body.appendChild(p);
// 	p.innerHTML = todos[i].text;
// }


for (let item of todos) {
    let p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = item.text;
}