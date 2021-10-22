$(document).ready(function () { // $ hace referencia a JQuery

    // Selector de ID
    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");

    var verde = $("#verde").css("background", "green")
        .css("color", "white");

    
    // Selector de clases
    var mi_clase = $(".zebra").css("padding", "5px");
    mi_clase.css("border", "3px dashed black");

    $(".sin_borde").click(function(){
        console.log("click");
        $(this).addClass('zebra');
    });


    // Selector de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var thisa = $(this);
        if(!thisa.hasClass("grande")){
            thisa.addClass("grande");
        }else{
            thisa.removeClass("grande");
        }        
    });


    // Selectgor de atributo
    $('[title="Google"]').css("background", "#ccc");
    $('[title="Youtube"]').css("background", "blue");


    // Otros
    //$('p, a').addClass("margen-superior");

    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda);

});