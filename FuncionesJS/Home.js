Promise.all([cuenta()])
    .then(resultados => {
        var transacciones = new Transacciones();
        var claves = new ObtenerClaves(resultados[0]);

        Promise.all([claves.obtenerClaves(), transacciones.obtenerArrayTransacciones()])
            .then(resultados => {
                var datos = decryptArray(resultados[0][0].UsuarioDatos, llaves.datos);
                mostrarTransaccioes(resultados[1], resultados[0][0].UsuarioClavePublica)
                $("#saldo").text(datos.saldo);
                $("#tipo").text(datos.tipoCuenta);
                $("#numero").text(datos.numeroCuenta);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
    .catch(error => {
        console.error('Error:', error);
    });

function mostrarTransaccioes(array, clavePublica) {

    var tbody = document.getElementById("tabla");
    let movimientos = 0;

    for (let i = 0; i < array.length; i++) {
        var Transaccion = decryptArray(array[i].datos, llaves.firmas)
        if (Transaccion.remitenteId === clavePublica) {
            var tr = document.createElement("tr");
            var tdusuario = document.createElement("td");
            tdusuario.textContent = Transaccion.destinatarioId;
            var tdcantidad = document.createElement("td");
            tdcantidad.textContent = Transaccion.cantidad;
            var tdtipo = document.createElement("td");
            tdtipo.textContent = Transaccion.tipoTransaccion;
            var tdfecha = document.createElement("td");
            tdfecha.textContent = Transaccion.fecha;
            tr.appendChild(tdusuario);
            tr.appendChild(tdcantidad);
            tr.appendChild(tdtipo);
            tr.appendChild(tdfecha);

            tbody.appendChild(tr);
            movimientos++;
        }
    }

    $("#movimientos").text(movimientos);
}