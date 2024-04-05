class ObtenerClaves {
    constructor(datos) {
        this.datos = datos;
    }

    obtenerClaves() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '../FuncionesPHP/ObtenerClaves.php',
                type: 'GET',
                data: {
                    dato: this.datos.id
                },
                success: (response) => {
                    resolve(response);
                },
                error: function (xhr, status, error) {
                    console.log(error);
                    reject(error);
                }
            });
        });
    }
}