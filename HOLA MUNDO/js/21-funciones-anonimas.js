'use stric'

//  Funciones anonimas
// Es una funcion que no tiene nombre

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function (dato) {
    console.log("La suma es: " + dato);
},
    dato => {
        console.log("La suma por dos es: ", (dato * 2));
    });
