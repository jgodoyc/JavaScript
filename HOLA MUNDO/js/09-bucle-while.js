'use strict'

//Bucle WHILE

var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: "+year);
    year++;

    if(year == 2030){
        break;
    }
}

//Do while

var years = 30;

do{
    //alert("Solo cuando sea diferente a 20");
    years--;
    console.log(years);
}while(years > 25)