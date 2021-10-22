'use strict'

//Bom - Browser Object Model

function getBom(){
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location.href);
}

function redirect(url){
    windows.location.href = url;
}

function abrirVentana(url){
    window.open(url);
}

getBom();
