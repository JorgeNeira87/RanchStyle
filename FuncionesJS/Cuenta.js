function cuenta(){
    var googleOAuth = new GoogleOAuth(Credencial.client_id, Credencial.client_secret, Links.local);
    return googleOAuth.handleRedirect()
    .catch(error => {
        console.error(error);
    });
}