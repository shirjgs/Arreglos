//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.

// Definir el array
var miArray = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
var arrayOrdenado = miArray.slice().sort(function(a, b) {
  return a - b;
});

// Obtener el número menor y mayor
var numeroMenor = arrayOrdenado[0];
var numeroMayor = arrayOrdenado[arrayOrdenado.length - 1];

// Mostrar resultados en consola
console.log("Arreglo ordenado de menor a mayor:", arrayOrdenado);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
