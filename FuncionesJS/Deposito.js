const cuentas = new Cuentas();
Promise.all([cuentas.obtenerArrayCuentas()])
    .then(resultados => {
        for (let i = 0; i < resultados[0].length; i++) {
            var usuarioDatos = decryptArray(resultados[0][i].UsuarioDatos, llaves.datos);
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
            "tipoTransaccion": "Depósito",
            "fecha": fecha()
        };

        Promise.all([cuenta()])
            .then(resultados => {
                var claves = new ObtenerClaves(resultados[0]);
                Promise.all([claves.obtenerClaves()])
                    .then(resultados => {
                        arrayDatosTransaccion.remitenteId = resultados[0][0].UsuarioClavePublica;
                        var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                        if($("#nip").val() === datos.nip && $("#contrasena").val() === datos.contrasena){
                            if ((datos.saldo - parseInt($("#cantidad").val())) >= 0) {
                                datos.saldo = datos.saldo - parseInt($("#cantidad").val());
                                actualizarDatos(datos);
    
                                var arrayDestinatario = {
                                    "id": $("#destinatario").val()
                                }
                                var clavesDestinatario = new ObtenerClaves(arrayDestinatario);
                                Promise.all([clavesDestinatario.obtenerClaves()])
                                    .then(resultados => {
                                        var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                                        datos.saldo = datos.saldo + parseInt($("#cantidad").val());
                                        arrayDatosTransaccion.destinatarioId = datos.name;
                                        actualizarDatos(datos);
                                        $.ajax({
                                            url: '../FuncionesPHP/Transacciones.php',
                                            type: 'POST',
                                            data: { "datos": encryptArray(arrayDatosTransaccion, llaves.firmas) },
                                            success: (response) => {
                                            },
                                            error: function (xhr, status, error) {
                                                console.log(error);
                                            }
                                        });
                                    })
                                    .catch(error => {
                                        console.error('Error:', error);
                                    });
                            }
                            else {
                                validacion = false;
                            };
                        } else {
                            Swal.fire({
                                title: "Datos erroneos.",
                                width: 600,
                                padding: "3em",
                                color: "#dc3545",
                                background: "#6c757d",
                                confirmButtonColor: "#dc3545"
                            });
                        }

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

function fecha() {
    var fecha = new Date();
    var dia = ("0" + fecha.getDate()).slice(-2);
    var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var anio = fecha.getFullYear();
    var horas = ("0" + fecha.getHours()).slice(-2);
    var minutos = ("0" + fecha.getMinutes()).slice(-2);
    var segundos = ("0" + fecha.getSeconds()).slice(-2);

    var fechaHoraFormateada = dia + "-" + mes + "-" + anio + " " + horas + ":" + minutos + ":" + segundos;

    return fechaHoraFormateada;
}