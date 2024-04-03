function loadModule(modulePath) {
    const moduleLoader = new ModuleLoader('contenido');
    moduleLoader.loadModule(modulePath);
}

function cuenta(){
    var googleOAuth = new GoogleOAuth(Credencial.client_id, Credencial.client_secret, Links.local);
    googleOAuth.handleRedirect()
    .then(userinfo => {
        $("#name").text(userinfo.given_name);
        $("#imagen").attr("src", userinfo.picture);
    })
    .catch(error => {
        console.error(error);
    });
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