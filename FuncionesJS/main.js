function loadModule(modulePath) {
    const moduleLoader = new ModuleLoader('contenido');
    moduleLoader.loadModule(modulePath);
}
Promise.all([cuenta()])
.then(resultados => {
    let datos = resultados[0];
    console.log(datos)
    $("#name").text(datos.nombre);
    $("#imagen").attr("src", datos.picture);
});


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