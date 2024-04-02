function loadModule(modulePath) {
    const moduleLoader = new ModuleLoader('contenido');
    moduleLoader.loadModule(modulePath);
}

function cuenta(){
    console.log("entro a la funcion")
    var googleOAuth = new GoogleOAuth('39912971374-rf7qeubtkhb5nfh85g62pds4ksl5qgem.apps.googleusercontent.com',
    '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',
    'http://localhost/RanchStyle/Modulos/Principal.html');
    googleOAuth.handleRedirect()
    .then(userinfo => {
        console.log('Datos del usuario:', userinfo);
        $("#name").text(userinfo.given_name);
        $("#imagen").attr("src",userinfo.picture);
    })
    .catch(error => {
        console.error(error);
    });
}

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

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