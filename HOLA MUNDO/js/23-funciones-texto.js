'use strict'

//  Transformacion de textos

var numero = 444;
var texto1 = "   Bienvenido al ejemplo de texto  ";
var texto2 = "Veamos si es bueno o no";

var busqueda = texto1.indexOf("al");
var busqueda = texto1.search("al"); // devuelve posicion del primer resultado
var busqueda = texto1.match("al");  // crea un arreglo con todos los resultados
var busqueda = texto1.substr(11, 2); //desde la posicion 11 hasta 2 caracteres adelante
var busqueda = texto1.charAt(12); // muestra el caracter en la posicion
var busqueda = texto1.startsWith("Bienv"); // regresa true o false, inicio del texto
var busqueda = texto1.endsWith("Bienv"); // regresa true o false, final del texto
var busqueda1 = texto2.includes("bueno"); // regresa true o false, si existe.

var busqueda2 = texto1.replace("al", "oe"); // reemplaza el primer string, por el segundo
var busqueda2 = texto1.slice(14); // separa String, despues del valor.
var busqueda2 = texto1.slice(14, 22); // separa String, entre los valores
var busqueda2 = texto1.slice(14, 22); // separa String, entre los valores
var busqueda2 = texto1.split(); // mete dentro de un array
var busqueda2 = texto1.split(" "); // mete dentro de un array, con separador
var busqueda2 = texto1.trim(); // quita espacios por delante y detras del string
console.log(busqueda2);

