'use strict'

//Ingresar dos numeros y que muestre TODOS los numeros existentes entre estos 2

do {
    var numero1 = parseInt(prompt("Ingrese primer numero", 0));
    var numero2 = parseInt(prompt("Ingrese segundo numero", 0 ));
} while (numero1 == numero2 || isNaN(numero1) || isNaN(numero2))

document.write("<h1>De "+numero1+" al "+numero2+" estan estos numeros: </h1>")
if (numero1 > numero2) {
    for (var i = numero1; i >= numero2; i--) {
        document.write(i+"<br>");
    }
} else if (numero2 > numero1) {
    for (var i = numero1; i <= numero2; i++) {
        document.write(i+"<br>");
    }
}