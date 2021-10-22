'use strict'

//Muestre todos los numeros divisores de un numero

do{
    var numero = parseInt(prompt("Ingrese un numero", 0));
}while(numero <= 0 || isNaN(numero))

for(var i = 1; i<=numero; i++){
    if(numero%i == 0){
        document.write(i+"<br>");
    }    
}