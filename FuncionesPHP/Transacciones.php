<?php
    require_once 'conexion.php';

    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $datosRecibidos  = $_POST['datos'];
            
            $sql = "INSERT INTO transacciones (datos) VALUES (:datos)";
            $datos = $cnnPDO ->prepare($sql);
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