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

$(document).ready(function () {
    $("#depositar").click(function (event) {
        event.preventDefault();
        let validacion = true;
        var arrayDatosTransaccion = {
            "remitenteId": "",
            "destinatarioId": "",
            "cantidad": $("#cantidad").val(),
            "tipoTransaccion": "Depósito"
        };

        Promise.all([cuenta()])
            .then(resultados => {
                var claves = new ObtenerClaves(resultados[0]);
                Promise.all([claves.obtenerClaves()])
                .then(resultados => {
                    arrayDatosTransaccion.remitenteId = resultados[0][0].UsuarioClavePublica;
                    var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                    if ((datos.saldo - parseInt($("#cantidad").val())) >= 0) {
                        console.log("Se Desposito");
                        datos.saldo = datos.saldo - parseInt($("#cantidad").val());
                        actualizarDatos(datos);

                            var arrayDestinatario = {
                                "id" : $("#destinatario").val()
                            }
                            var clavesDestinatario = new ObtenerClaves(arrayDestinatario);
                            arrayDatosTransaccion.remitenteId = resultados[0].id;
                            Promise.all([clavesDestinatario.obtenerClaves()])
                                .then(resultados => {
                                    var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                                    datos.saldo = datos.saldo + parseInt($("#cantidad").val());
                                    arrayDatosTransaccion.destinatarioId = resultados[0][0].UsuarioClavePublica;
                                    actualizarDatos(datos);
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                        }
                        else {
                            validacion = false;
                        };
                        
                        $.ajax({
                            url: '../FuncionesPHP/Transacciones.php',
                            type: 'POST',
                            data:  {"datos": encryptArray(arrayDatosTransaccion, llaves.firmas)},

                            success: (response) => {
                                console.log(response);
                            },
                            error: function (xhr, status, error) {
                                console.log(error);
                            }
                        });

                        // $("#movimientos").text(datos.saldo);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            })
            .catch(error => {
                console.error('Error:', error);
            });

    });
});

function actualizarDatos(datosActualizados) {
    var nuevosDatos = {
        "UsuarioID": datosActualizados.id,
        "Datos": encryptArray(datosActualizados, llaves.datos)
    }
    console.log(datosActualizados)
    console.log(nuevosDatos)
    $.ajax({
        url: '../FuncionesPHP/ActualizarDatos.php',
        type: 'POST',
        data: nuevosDatos,
        success: function (response) {
            // window.location.href = "../Modulos/Principal.html?pagina=Home";
        },
        error: function (xhr, status, error) {
            console.error('Error en la solicitud:', error);
        }
    });
}
