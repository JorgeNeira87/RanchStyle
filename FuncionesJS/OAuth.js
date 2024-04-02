class GoogleOAuth {
    constructor(client_id, redirect_uri){
        this.client_id = client_id;
        this.redirect_uri = redirect_uri;
        this.auth_endpoint = Credencial.auth_uri;
        this.scope = Links.scope;
    }

    handleGoogleLogin(){
        var auth_url= this.auth_endpoint + '?client_id=' + this.client_id + '&redirect_uri=' +
            encodeURIComponent(this.redirect_uri) + '&scope=' + encodeURIComponent(this.scope) + '&response_type=code';

            window.location.href = auth_url;
    }
}