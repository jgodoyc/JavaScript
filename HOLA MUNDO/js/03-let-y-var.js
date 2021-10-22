'use strict'

//PRUEBAS CON LET y VAR

//pruebas con VAR
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//pruebas con LET
var texto = "Curso JS";
console.log(texto); // valor "JS"

if(true){
    let texto = "Curso HTML";
    console.log(texto); // valor "HTML"
}
console.log(texto); // valor "JS"