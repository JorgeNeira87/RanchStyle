$(document).ready(function () {
    $("#retirar").click(function (event) {
        event.preventDefault();
        let validacion = true;
        var arrayDatosTransaccion = {
            "remitenteId": "",
            "destinatarioId": "terceros",
            "cantidad": $("#cantidad").val(),
            "tipoTransaccion": "retiro",
            "fecha": fecha()
        };

        Promise.all([cuenta()])
            .then(resultados => {
                var claves = new ObtenerClaves(resultados[0]);
                Promise.all([claves.obtenerClaves()])
                    .then(resultados => {
                        arrayDatosTransaccion.remitenteId = resultados[0][0].UsuarioClavePublica;
                        var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                        if ($("#nip").val() === datos.nip && $("#contrasena").val() === datos.contrasena) {
                            if ((datos.saldo - parseInt($("#cantidad").val())) >= 0) {
                                console.log("Se Retiro");
                                datos.saldo = datos.saldo - parseInt($("#cantidad").val());
                                actualizarDatos(datos);

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

                        $.ajax({
                            url: '../FuncionesPHP/Transacciones.php',
                            type: 'POST',
                            data: { "datos": encryptArray(arrayDatosTransaccion, llaves.firmas) },

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