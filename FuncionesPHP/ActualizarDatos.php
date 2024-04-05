<?php
    require_once 'conexion.php';

    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $userid = $_POST['UsuarioID'];
            $datosRecibidos  = $_POST['Datos'];
            
            $sql = "UPDATE usuarios SET UsuarioDatos=:datos WHERE UsuarioID=:id";
            $datos = $cnnPDO ->prepare($sql);
            $datos->bindParam(':id', $userid);
            $datos->bindParam(':datos', $datosRecibidos );
            $datos-> execute();

            echo true;
        } else {
            echo "La solicitud no es POST";
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
?>