'use strict'

// Evento LOAD
window.addEventListener('load', () => {

    // Eventos del ratón

    function cambiarColor() {
        var bg = boton.style.backgroundColor;
        console.log("click");

        if (bg == "green") {
            boton.style.backgroundColor = "red";
        } else {
            boton.style.backgroundColor = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"

    }


    var boton = document.querySelector("#boton");

    // Evento Click
    boton.addEventListener('click', function () {
        cambiarColor();
        this.style.border="10px solid black";
    });

    // Evento Mouse Over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
    });

    // Evento Mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#ccc";
    });


    // Evento Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("[Focus]Estas dentro del input");
    });

    // Evento Blur
    input.addEventListener('blur', function () {
        console.log("[Blur]Estas fuera  del input");
    });

    // Evento Keydown
    input.addEventListener('keydown', function (event) {
        console.log("[keydown]Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    // Evento Keypress
    input.addEventListener('keypress', function (event) {
        console.log("[keypress]Tecla Presionada", String.fromCharCode(event.keyCode));
    });

    // Evento Keyup
    input.addEventListener('keyup', function (event) {
        console.log("[keyup]Tecla soltada", String.fromCharCode(event.keyCode));
    });


});

