'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Javier Godoy";
var nombres = ["Javier Godoy", "Bastian Nicolas", "Manuel Chamorro", "Elza Pato", 52, true];

var lenguajes = new Array("php", "js", "Go", "Java", "C", "Pascal");

// console.log(nombres[2]);

/*

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("El usuario seleccionado es: " +nombres[elemento]);
}
alert(nombres[elemento]);

*/


document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

/*
lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+index+" - "+elemento+"</li>");
});
*/
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


// Busqueda OP1

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "php";
});


// Busqueda Optimizada

var busqueda1 = lenguajes.find(lenguaje => lenguaje == "Pascal");


// Busqueda Optimizada, Devuelve el indice

var busqueda1 = lenguajes.findIndex(lenguaje => lenguaje == "Pascal");

console.log(busqueda1);

var precios = [10, 20, 50, 80, 12];

// Busqueda Optimizada, Devuelve TRUE O FALSE haciendo la condicion
var busqueda2 = precios.some(precio => precio >= 20);
console.log(busqueda2);

