<?php
    require_once 'conexion.php';

    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $userid = $_POST['UsuarioID'];
            $publica = $_POST['clavePublica'];
            $privada = $_POST['clavePrivada'];
            
            $sql = "INSERT usuarios(UsuarioID, UsuarioClavePrivada, UsuarioClavePublica) VALUES (:id, :privada, :publica)";
            $datos = $cnnPDO ->prepare($sql);
            $datos->bindParam(':id', $userid);
            $datos->bindParam(':privada', $privada);
            $datos->bindParam(':publica', $publica);
            $datos-> execute();

            echo true;
        } else {
            echo "La solicitud no es POST";
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
?>