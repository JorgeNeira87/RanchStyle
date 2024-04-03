function arrayCuentas() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../FuncionesPHP/Usuarios.php',
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