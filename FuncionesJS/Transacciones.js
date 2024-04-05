class Transacciones {
    constructor() {
        this.arrayCuentas = null;
    }

    obtenerArrayTransacciones() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '../FuncionesPHP/Transaccion.php',
                type: 'GET',
                success: (response) => {
                    resolve(response);
                },
                error: (xhr, status, error) => {
                    reject(error);
                    console.error('Error al obtener datos:', error);
                }
            });
        });
    }
}