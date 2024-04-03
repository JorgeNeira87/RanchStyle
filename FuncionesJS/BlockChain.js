let datos, ArrayCuentas;
datosCuenta();
    
Promise.all([cuenta(), arrayCuentas()])
    .then(resultados => {
        datos = resultados[0];
        ArrayCuentas = resultados[1];
console.log(datos)
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
        if (ArrayCuentas[i] = datos.id) {
            return true;
        }
    }
    return false;
}

function guardarDatos() {
    console.log(datos);
    let clavePublica, clavePrivada, nombre, correo;

    clavePublica = encryptMessage(datos.id, llaves.publico);
    clavePrivada = encryptMessage(datos.id, llaves.privado);
    nombre = encryptMessage(datos.name, llaves.datos);
    correo = encryptMessage(datos.email, llaves.datos);

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