const idades = [10, 16, 14, 18];

/**
 * filter retorna um novo array com os valores que atendem a condição
 *@param predicate Uma função que aceita até três argumentos.
 *O método filter chama a função de predicado uma vez para cada elemento da matriz.
 **/

 const maiorDeIdade = idades.filter((idade) => idade >= 18);
