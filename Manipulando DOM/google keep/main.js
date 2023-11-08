const form = document.querySelector("form");
const filter = document.querySelector("filter");
const itemList = document.querySelector("#items");



form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", buscarItems);


function addItem(e) {
	e.preventDefault();

	//pegando o valor do input
	let inputValue = document.querySelector("#item").value;

	//criando o elemento li
	let li = document.createElement("li");

	//adicionando as classes
	li.className = "list-group-item";

	//create text node, cria um texto e atrela a um elemento
	li.appendChild(document.createTextNode(inputValue));

	const btnDelete = document.createElement("button");
	btnDelete.className = "btn btn-danger btn float-end delete";
	btnDelete.appendChild(document.createTextNode("x"));
	li.appendChild(btnDelete);

	itemList.appendChild(li);
	form.reset();
}
