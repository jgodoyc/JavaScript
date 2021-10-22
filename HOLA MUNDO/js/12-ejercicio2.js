'use strict'

//Con bucle sumar y calcular media de los numeros. Hasta introducir un numero negativo.

var suma =0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introdoce numeros hasta ingresar un NEGATIVO", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        // suma += numero;

        contador++;
    }
}while(numero >= 0)

alert("La suma total es de: "+suma);
alert("El promedio de los numeros es: "+ (suma/contador));