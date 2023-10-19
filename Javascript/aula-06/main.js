let idades = [22, 8, 17, 14, 30];

const idadesString = idades.join(",");
console.log(idadesString);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const removeLastFruit = fruits.pop()
fruits.push("Grape")
console.log(fruits);


const removeFirstFruit = fruits.shift()
fruits.unshift("Kiwi")
console.log(fruits);
