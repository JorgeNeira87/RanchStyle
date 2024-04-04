<?php
    require_once ("conexion.php");
    
    try {
        $sql = "SELECT UsuarioClavePrivada FROM usuarios";
        $cuentas = $cnnPDO ->query($sql);
        $datos = $cuentas->fetchAll(PDO::FETCH_ASSOC);

        $datos_json = json_encode($datos);

        header('Content-Type: application/json');

        echo $datos_json;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
    
?>