'use strict'

//Mostrar todos los numeros impares entre dos numeros

do {
    var numero1 = parseInt(prompt("Ingrese primer numero", 0));
    var numero2 = parseInt(prompt("Ingrese segundo numero", 0));
} while (numero1 == numero2 || isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0)

if (numero1 > numero2) {
    for (var i = numero1; i >= numero2; i--) {
        if(i%2 == 1){
            document.write(i+"<br>");
        }
    }
}else if(numero2 > numero1){
    for (var i = numero1; i <= numero2; i++) {
        if(i%2 == 1){
            document.write(i+"<br>");
        }
    }
}

