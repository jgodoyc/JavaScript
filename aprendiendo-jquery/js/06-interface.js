$(document).ready(function(){

    // Mover elemento por la pagina
    $('.elemento').draggable();


    // Redimensionar
    $('.elemento').resizable();


    // Seleccionar elementos
    //$(".lista-seleccionable").selectable();


    // Ordenar Elementos
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });


    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado dentro del area");
        }
    });


    // Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake", 4000);
    })


    // Tooltip
    $(document).tooltip();


    // Dialog
    $('#lanzar-popup').click(function(){
            $('#popup').dialog();
    });


    // Datepicker
    $('#calendario').datepicker();


    //Tabs
    $('#pestanas').tabs();
});