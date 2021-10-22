'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}

// Conseguir elemenos cn un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); // # id de elemento - utilizar . es para una clase

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";



// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);     // añade despues
        document.querySelector("#miseccion").append(parrafo); // añade antes
    }
}

seccion.append(hr);



// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = "red";
    }
}


// Query selector
var id = document.querySelector("#encabezado"); // selecciona 1 solo elemento
console.log(id);

var claseRojo = document.querySelectorAll(".rojo"); // selecciona muchos elementos
console.log(claseRojo);

