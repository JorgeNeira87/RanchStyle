class Cuentas {
    constructor() {
        this.arrayCuentas = null;
    }

    obtenerArrayCuentasID() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '../FuncionesPHP/UsuariosID.php',
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

    obtenerArrayCuentas() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '../FuncionesPHP/Usuarios.php',
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