function datosCuenta(){
    var googleOAuth = new GoogleOAuth(Credencial.client_id, Credencial.client_secret, Links.local);
    googleOAuth.handleRedirect()
    .then(userinfo => {
        $.ajax({
            url: '../FuncionesPHP/Datos.php',
            type: 'POST',
            data: userinfo,
            success: function(response) {
                console.log('La solicitud fue exitosa:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error en la solicitud:', error);
            }
        });
    })
    .catch(error => {
        console.error(error);
    });
}
function cuenta(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../FuncionesPHP/ObtenerDatos.php',
            type: 'GET',
            success: function(response) {
                resolve(response);
            },
            error: function(xhr, status, error) {
                reject(error);
                console.error('Error al obtener datos:', error);
            }
        });
    });
   
}
