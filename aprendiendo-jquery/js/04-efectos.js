$(document).ready(function(){
    var caja = $('#caja');

    caja.hide();

    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        caja.fadeIn('normal');
        caja.fadeTo('slow', 0.8);
    });

    $('#ocultar').click(function(){
        caja.fadeOut('normal');
        $(this).hide();
        $('#mostrar').show();
        
        caja.slideUp('slow', function(){
            console.log("Cartel ocultado");
        });
    });

    $('#todoenuno').click(function(){
        caja.toggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({marginLeft: '500px',
            fontSize: '40px',
            height: '110px'}, 'normal')
        .animate({borderRadius: '900px',
            marginTop: '80px'}, 'slow')
        .animate({borderRadius: '0px',
            marginLeft: '0px'}, 'slow')
        .animate({borderRadius: '100px',
            marginTop: '0px'}, 'slow');


    });
    

});