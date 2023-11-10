//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// Solicitar al usuario ingresar un string con palabras separadas por coma
var userInput = prompt("Ingrese un string con palabras separadas por coma:");

// Convertir el string en un array de números
var arrayResultado = userInput.split(',').map(function(item) {
  return parseInt(item);
});

// Mostrar en consola el resultado del array
console.log(arrayResultado);
