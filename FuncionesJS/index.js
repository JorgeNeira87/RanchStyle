function Ingreso(){
    var googleOAuth = new GoogleOAuth('39912971374-rf7qeubtkhb5nfh85g62pds4ksl5qgem.apps.googleusercontent.com',
    'http://localhost/RanchStyle/Modulos/Principal.html');
googleOAuth.handleGoogleLogin();
}