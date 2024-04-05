Promise.all([cuenta()])
    .then(resultados => {
        var claves = new ObtenerClaves(resultados[0]);

        Promise.all([claves.obtenerClaves(), cuenta()])
            .then(resultados => {
                var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                console.log(datos)
                $("#saldo").text(datos.saldo);
                $("#tipo").text(datos.tipoCuenta);
                $("#numero").text(datos.numeroCuenta);
                // $("#movimientos").text(datos.saldo);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
    .catch(error => {
        console.error('Error:', error);
    });