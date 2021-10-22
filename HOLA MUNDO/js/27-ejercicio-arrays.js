'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array completo en el cuerpo de la pagina y en la consola
3. Ordenar y mostrar
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor introducido por el usuario, revisar si existe y su indice.
*/

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>")
    numeros.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>")
}

var contador = 0;
var elemento = "";
var numeros = [];

// Pedir numeros
do {
    elemento = prompt("Introduce un numero");
    numeros.push(parseInt(elemento));
    contador++;
} while (contador <= 5);

// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);


// Mostrar array en la consola
console.log(numeros);

// Ordenar y Mostrar
numeros.sort(function(a, b){return a-b}); // Funcion para ordenar de menor a mayor
mostrarArray(numeros," Ordenado")

// Ordenar Inverso y Mostrar
numeros.reverse();
mostrarArray(numeros, " Invertido");


// Cantidad de elementos
console.log(numeros.length);

var busqueda = prompt("Ingrese un elemento a buscar: ");
var indice = numeros.findIndex(num => num == busqueda);

if (indice != -1) {
    console.log("El indice del elemento es: " + indice);
} else {
    console.log("No existe elemento.");
}





