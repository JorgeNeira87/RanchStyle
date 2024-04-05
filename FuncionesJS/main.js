Promise.all([cuenta()])
.then(resultados => {
    let datos = resultados[0];

    $("#name").text(datos.nombre);
    $("#imagen").attr("src", datos.picture);
    loadModule();
    spinner();
});

function loadModule() {
    var urlActual = window.location.href;
    var parametros = new URLSearchParams(new URL(urlActual).search);
    var valor = parametros.get('pagina');
    var modulo = "./" + valor + ".html";
    var moduloID = "#" + valor;

    $(Modulos.Home).removeClass("active");
    $(Modulos.Deposito).removeClass("active");
    $(Modulos.Retiro).removeClass("active");

    $(moduloID).addClass("active");


    const moduleLoader = new ModuleLoader('contenido');
    moduleLoader.loadModule(modulo);
}


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

// Sidebar Toggler
$('.sidebar-toggler').click(function () {
    $('.sidebar, .content').toggleClass("open");
    return false;
});