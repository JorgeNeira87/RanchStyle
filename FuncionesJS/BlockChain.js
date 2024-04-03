let datosCuenta, ArrayCuentas;

Promise.all([cuenta(), arrayCuentas()])
    .then(resultados => {
        datosCuenta = resultados[0];
        ArrayCuentas = resultados[1];

        if (!checarExistencia()) {
            guardarDatos();
        }
        
        window.location.href = "../Modulos/Principal.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });

function checarExistencia() {
    for (let i = 0; i < ArrayCuentas.length; i++) {
        if (ArrayCuentas[i] = datosCuenta.id) {
            return true;
        }
    }
    return false;
}

function guardarDatos() {
    console.log(datosCuenta);
    let clavePublica, clavePrivada, nombre, correo;

    clavePublica = encryptMessage(datosCuenta.id, llaves.publico);
    clavePrivada = encryptMessage(datosCuenta.id, llaves.privado);
    nombre = encryptMessage(datosCuenta.name, llaves.datos);
    correo = encryptMessage(datosCuenta.email, llaves.datos);

    var datos = {
        "clavePublica": clavePublica,
        "clavePrivada": clavePrivada,
        "Nombre": nombre,
        "Correo": correo
    }

    $.ajax({
        url: '../FuncionesPHP/GuardarDatos.php',
        type: 'POST',
        data: datos,
        success: function(response) {
            console.log('La solicitud fue exitosa:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud:', error);
        }
    });
}