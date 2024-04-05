const cuentas = new Cuentas();

Promise.all([cuentas.obtenerArrayCuentas()])
    .then(resultados => {
        console.log(resultados[0])
        for (let i = 0; i < resultados[0].length; i++) {
            var usuarioDatos = decryptArray(resultados[0][i].UsuarioDatos, llaves.datos);
            console.log(usuarioDatos)
            $("#destinatario").append($("<option>", {
                value: resultados[0][i].UsuarioID,
                text: usuarioDatos.name
            }));
            
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });