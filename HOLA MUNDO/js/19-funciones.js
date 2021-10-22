'use strict'

//  Funciones

// Definir funcion
function calculadora(a, b, mostrar = false) {
    if (mostrar == false) {
        console.log("Suma: " + (a + b));
        console.log("Resta: " + (a - b));
        console.log("Multiplicacion: " + (a * b));
        console.log("Division: " + (a / b));

    }else{
        document.write("Suma: " + (a + b)+"<br>");
        document.write("Resta: " + (a - b)+"<br>");
        document.write("Multiplicacion: " + (a * b)+"<br>");
        document.write("Division: " + (a / b)+"<br>");
    }
}

function saludo() {
    console.log("Saludos!");
}


var num1 = parseInt(prompt("Ingrese primer numero", 1));
var num2 = parseInt(prompt("Ingrese segundo numero", 1));

// Invocar o llamar a la funcion
calculadora(num1, num2, true);