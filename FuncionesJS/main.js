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