let datos, ArrayCuentas;

Promise.all([datosCuenta(), arrayCuentas()])
    .then(resultados => {
        datos = resultados[0];
        ArrayCuentas = resultados[1];
        console.log(datos)

        if (!checarExistencia()) {
            guardarDatos(datos);
        }
        
        sessionDatos(datos);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function checarExistencia() {
    for (let i = 0; i < ArrayCuentas.length; i++) {
        if (ArrayCuentas[i] = datos.id) {
            return true;
        }
    }
    return false;
}

function sessionDatos(datos) {

    $.ajax({
        url: '../FuncionesPHP/ObtenerClaves.php',
        type: 'GET',
        data: {
            dato: datos.id
        },
        success: function (response) {
            var arrayDatos = {
                "id": datos.id,
                "email": datos.email,
                "picture": datos.picture,
                "name": datos.name,
                "family_name": datos.family_name,
                "given_name": datos.given_name,
                "clavePublica": response[0].UsuarioClavePublica,
                "clavePrivada": response[0].UsuarioClavePrivada
            }
            $.ajax({
                url: '../FuncionesPHP/Datos.php',
                type: 'POST',
                data: arrayDatos,
                success: function(response) {
                    window.location.href = "../Modulos/Principal.html";
                },
                error: function(xhr, status, error) {
                    console.error('Error en la solicitud:', error);
                }
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });

    



}

function guardarDatos(datos) {
    let clavePublica, clavePrivada;
    

    clavePublica = encryptMessage(datos.id, llaves.publico);
    clavePrivada = encryptMessage(datos.id, llaves.privado);

    var arrayDatos = {
        "UsuarioID": datos.id,
        "clavePublica": clavePublica,
        "clavePrivada": clavePrivada
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