$(document).ready(function () {

    // MouseHover y MouseOut
    var caja = $("#caja");

    /* caja.mouseover(function (){
         $(this).css("background","red");
     });
 
     caja.mouseout(function(){
         $(this).css("background", "green");
     });
     */

    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    // Hover
    caja.hover(cambiaRojo, cambiaVerde);


    // Click, Doble Click
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow");
    })


    // Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "2px solid transparent");
        datos.text($(this).val()).show();
    });


    // MouseDown y MouseUp
    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "black");
    });


    //MouseMove
    $(document).mousemove(function () {
        $('body').css("cursor", "none");
        $("#sigueme").css("left", event.clientX)
            .css("top", event.clientY);
    });
});