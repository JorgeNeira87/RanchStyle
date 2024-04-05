// Formato de campo de Numero Telefonico
var telefonoInput = document.getElementById("telefono");

telefonoInput.addEventListener("input", function () {
    var valor = this.value.replace(/\D/g, ''); // Eliminar caracteres que no sean dígitos

    var numeroFormateado = '';
    if (valor.length > 0) {
        numeroFormateado = valor.substring(0, 3);
        if (valor.length > 3) {
            numeroFormateado += '-' + valor.substring(3, 6);
            if (valor.length > 6) {
                numeroFormateado += '-' + valor.substring(6, 10);
            }
        }
    }

    this.value = numeroFormateado;
});

// Formato de campo de NIP
var input = document.getElementById("nip");

input.addEventListener("input", function () {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, 4);
    }
});

// Formato de campo de RFC
var input = document.getElementById("rfc");

input.addEventListener("input", function () {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, 13);
    }
});

$(document).ready(function() {
    $("#guardar").click(function(event) {
        event.preventDefault();
        
        Promise.all([cuenta()])
        .then(resultados => {
            let datos = resultados[0];
        
            actualizarDatos(datos);
        });
    });
});

function actualizarDatos(datos) {

    $.ajax({
        url: '../FuncionesPHP/ObtenerClaves.php',
        type: 'GET',
        data: {
            dato: datos.id
        },
        success: function (response) {
            var decrypDatosArray = decryptArray(response[0].UsuarioDatos, llaves.datos);
            var userId = decryptMessage(response[0].UsuarioClavePrivada, llaves.privado);
            userId = parseInt(userId) + 11111;

            if (validarDatos()) {
                decrypDatosArray.telefono = $("#telefono").val();
                decrypDatosArray.tipoCuenta = $("#cuenta").val();
                decrypDatosArray.nip = $("#nip").val();
                decrypDatosArray.rfc = $("#rfc").val();
                decrypDatosArray.contrasena = $("#contrasena").val();
                decrypDatosArray.numeroCuenta = userId
                decrypDatosArray.saldo = 0.0
                
                var nuevosDatos = {
                    "UsuarioID": datos.id,
                    "Datos": encryptArray(decrypDatosArray, llaves.datos)
                }
                
                $.ajax({
                    url: '../FuncionesPHP/ActualizarDatos.php',
                    type: 'POST',
                    data: nuevosDatos,
                    success: function(response) {
                        window.location.href = "../Modulos/Principal.html?pagina=Home";
                    },
                    error: function(xhr, status, error) {
                        console.error('Error en la solicitud:', error);
                    }
                });
            }

        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });

    



}

function validarDatos() {
    if ($("#telefono").val() === "") {
        Swal.fire({
            title: "Datos erroneos.",
            width: 600,
            padding: "3em",
            color: "#dc3545",
            background: "#6c757d",
            confirmButtonColor: "#dc3545"
        });
        return false;
    }

    if ($("#cuenta").val() === "0") {
        Swal.fire({
            title: "Datos erroneos.",
            width: 600,
            padding: "3em",
            color: "#dc3545",
            background: "#6c757d",
            confirmButtonColor: "#dc3545"
        });
        return false;
    }

    if ($("#nip").val() === "") {
        Swal.fire({
            title: "Datos erroneos.",
            width: 600,
            padding: "3em",
            color: "#dc3545",
            background: "#6c757d",
            confirmButtonColor: "#dc3545"
        });
        return false;
    }

    if ($("#rfc").val() === "") {
        Swal.fire({
            title: "Datos erroneos.",
            width: 600,
            padding: "3em",
            color: "#dc3545",
            background: "#6c757d",
            confirmButtonColor: "#dc3545"
        });
        return false;
    }

    if ($("#contrasena").val() === "") {
        Swal.fire({
            title: "Datos erroneos.",
            width: 600,
            padding: "3em",
            color: "#dc3545",
            background: "#6c757d",
            confirmButtonColor: "#dc3545"
        });
        return false;
    }
}