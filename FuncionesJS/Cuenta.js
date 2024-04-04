function datosCuenta() {
    return new Promise((resolve, reject) => {
        var googleOAuth = new GoogleOAuth(Credencial.client_id, Credencial.client_secret, Links.local);
        googleOAuth.handleRedirect()
            .then(userinfo => {
                resolve(userinfo);
            })
            .catch(error => {
                console.error(error);
            });
    });
}
function cuenta() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../FuncionesPHP/ObtenerDatos.php',
            type: 'GET',
            success: function (response) {
                resolve(response);
            },
            error: function (xhr, status, error) {
                reject(error);
                console.error('Error al obtener datos:', error);
            }
        });
    });

}
