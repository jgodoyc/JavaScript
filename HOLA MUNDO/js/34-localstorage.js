'use strict'

// LocalStorage


// Comprobacion disponibilidad de LocalStorage
if(typeof(Storage) != 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log("localstorage Incompatible");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de JS");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML =  localStorage.getItem("titulo");


// Guardar Objetos
var usuario  = {
    nombre: "Javier Godoy",
    email: "jgodoyc@hotmail.com",
    web: "google.cl"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar Objetos
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);


document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

// Vaciar memoria
localStorage.clear();

// eliminar elemento de memoria
localStorage.removeItem("usuario");
