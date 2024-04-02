class GoogleOAuth {
    constructor(client_id, client_secret, redirect_uri) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.redirect_uri = redirect_uri;
        this.token_endpoint = 'https://accounts.google.com/o/oauth2/token';
    }

    handleRedirect() {
        return new Promise((resolve, reject) => {
            var code = new URLSearchParams(window.location.search).get('code');
            var post_data = {
                code: code,
                client_id: this.client_id,
                client_secret: this.client_secret,
                redirect_uri: this.redirect_uri,
                grant_type: 'authorization_code'
            };

            fetch(this.token_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(post_data)
            })
                .then(response => response.json())
                .then(data => {
                    var access_token = data.access_token;

                  
                    fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + access_token)
                        .then(response => response.json())
                        .then(userinfo => {
                            resolve(userinfo);
                        })
                        .catch(error => {
                            reject('Error al obtener información del usuario: ' + error);
                        });
                })
                .catch(error => {
                    reject('Error al intercambiar el código de autorización por el token de acceso: ' + error);
                });
        });
    }
}