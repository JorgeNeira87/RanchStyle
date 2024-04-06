class SessionDatos {
    constructor(datos) {
        this.datos = datos;
    }
    
    guardarDatos() {
        this.construirArrayClaves()
        $.ajax({
            url: '../FuncionesPHP/Datos.php',
            type: 'POST',
            data: this.arrayDatos,
            success: function (response) {
                console.log(response)
            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud:', error);
            }
        });
    }

    construirArrayClaves() {
        console.log(this.datos)
        console.log(this.datos[0].UsuarioDatos)
        var DatosArray = decryptArray(this.datos[0].UsuarioDatos, llaves.datos);
        console.log(DatosArray)
        this.arrayDatos = {
            "id": DatosArray.id,
            "email": DatosArray.email,
            "picture": DatosArray.picture,
            "name": DatosArray.name,
            "family_name": DatosArray.family_name,
            "given_name": DatosArray.given_name,
            "clavePublica": this.datos[0].UsuarioClavePublica,
            "clavePrivada": this.datos[0].UsuarioClavePrivada
        };
    };
}