$(document).ready(function () {

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            responsive: true
        });
    }



    // Posts
    if (window.location.href.indexOf('index') > -1) {
        {
            var posts = [
                {
                    title: 'Prueba de titulo 1',
                    date: 'Publicado el dia ' + moment().format("dddd") + " " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toiland pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
                },
                {
                    title: 'Prueba de titulo 2',
                    date: 'Publicado el dia ' + moment().format("dddd") + " " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toiland pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
                },
                {
                    title: 'Prueba de titulo 3',
                    date: 'Publicado el dia ' + moment().format("dddd") + " " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toiland pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
                },
                {
                    title: 'Prueba de titulo 4',
                    date: 'Publicado el dia ' + moment().format("dddd") + " " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toiland pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
                },
                {
                    title: 'Prueba de titulo 5',
                    date: 'Publicado el dia ' + moment().format("dddd") + " " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toiland pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
                }
            ];

            posts.forEach((item, index) => {
                var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
            `;

                $("#posts").append(post);
            });

        }
    }



    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    });


    // Scroll arriba de la web
    $(".subir").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    // Login falso
    $('#login form').submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });


    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            $("#reloj").html(reloj);
        }, 1000)
    }

    // Validacion
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }


});

