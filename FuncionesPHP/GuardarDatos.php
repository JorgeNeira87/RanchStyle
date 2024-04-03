<?php
    require_once 'conexion.php';

    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $publica = $_POST['clavePublica'];
            $privada = $_POST['clavePrivada'];
            $nombre = $_POST['Nombre'];
            $correo = $_POST['Correo'];
            
            $sql = "INSERT INTO usuarios(UsuarioClavePrivada, UsuarioClavePublica, UsuarioNombre, UsuarioCorreo) VALUES (:privada, :publica, :nombre, :correo)";
            $datos = $cnnPDO ->prepare($sql);
            $datos->bindParam(':privada', $privada);
            $datos->bindParam(':publica', $publica);
            $datos->bindParam(':nombre', $nombre);
            $datos->bindParam(':correo', $correo);
            $datos-> execute();

            echo true;
        } else {
            echo "La solicitud no es POST";
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
?>