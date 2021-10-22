'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.sort(); // ordena por orden alfabetico de manera automatico
peliculas.reverse(); // orden inverso del array



var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/**
var elemento ="";

do {
    var elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento); // Agrega un elemento al arreglo
}while(elemento != "ACABAR");

peliculas.pop(); // eliminar ultimo elemento de un array


peliculas.push("Batman");

*/

var indice = peliculas.indexOf('Gran torino');
if(indice >-1){
    peliculas.splice(indice, 1); // Eliminar elemento de un array en el indice, y cuantos siguientes.
}

var string = peliculas.join(); // se convierte array en string separados por comas


var cadena = "text1, texto2, texto3";
var cadena_array = cadena.split(", "); // convertir un string a array, separado por un delimitador


console.log(cadena_array);