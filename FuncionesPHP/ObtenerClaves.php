<?php
    require_once ("conexion.php");
    
    try {

        $dato = $_GET['dato'];

        $sql = "SELECT UsuarioClavePrivada, UsuarioClavePublica, UsuarioDatos FROM usuarios WHERE UsuarioID = :llave";
        $cuentas = $cnnPDO ->prepare($sql);
        $cuentas->bindParam(':llave', $dato);
        $cuentas-> execute();
        $datos = $cuentas->fetchAll(PDO::FETCH_ASSOC);

        $datos_json = json_encode($datos);

        header('Content-Type: application/json');

        echo $datos_json;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
    
?>