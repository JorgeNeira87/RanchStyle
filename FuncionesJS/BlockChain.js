let datos, ArrayCuentas;
const cuentas = new Cuentas();

Promise.all([datosCuenta(), cuentas.obtenerArrayCuentasID()])
    .then(resultados => {
        datos = resultados[0];
        ArrayCuentas = resultados[1];
        var claves = new ObtenerClaves(datos);

        if (!checarExistencia()) {
            guardarDatos(datos);
            Promise.all([claves.obtenerClaves()])
                .then(resultados => {
                    var session = new SessionDatos(resultados[0]);
                    session.guardarDatos();
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            window.location.href = "../Modulos/Principal.html?pagina=PrimeraVez";
        } else {
            Promise.all([claves.obtenerClaves()])
                .then(resultados => {
                    var session = new SessionDatos(resultados[0]);
                    session.guardarDatos();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            window.location.href = "../Modulos/Principal.html?pagina=Home";
        }
        
    })
    .catch(error => {
        console.error('Error:', error);
    });

function checarExistencia() {
    for (let i = 0; i < ArrayCuentas.length; i++) {
        if (ArrayCuentas[i].UsuarioID === datos.id) {
            return true;
        }
    }
    return false;
}

function guardarDatos(datos) {
    let clavePublica, clavePrivada, encryptedDatos;
    
    var arrayDatosUsuario = {
        "id": datos.id,
        "email": datos.email,
        "picture": datos.picture,
        "name": datos.name,
        "family_name": datos.family_name,
        "given_name": datos.given_name
    }

    clavePublica = encryptMessage(datos.id, llaves.publico);
    clavePrivada = encryptMessage(datos.id, llaves.privado);
    encryptedDatos = encryptArray(arrayDatosUsuario, llaves.datos);

    var arrayDatos = {
        "UsuarioID": datos.id,
        "ClavePublica": clavePublica,
        "ClavePrivada": clavePrivada
    }

    $.ajax({
        url: '../FuncionesPHP/GuardarDatos.php',
        type: 'POST',
        data: arrayDatos,
        success: function(response) {
            console.log('La solicitud fue exitosa:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud:', error);
        }
    });
}