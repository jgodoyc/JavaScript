'use strict'

//Programa que pide y compara numeros

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));

}

if (numero1 == numero2) {
    alert("Los numeros son iguales");
} else if (numero1 > numero2) {
    alert("El numero MAYOR es: " + numero1);
    alert("El numero MENOR es: " + numero2);
} else if (numero2 > numero1) {
    alert("El numero MAYOR es: " + numero2);
    alert("El numero MENOR es: " + numero1);
} else {
    alert("Introduce numeros correctos");
}