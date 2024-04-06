<?php
    session_start();
    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $_SESSION["id"] = $_POST['id'];
            $_SESSION["clavePrivada"] = $_POST['clavePrivada'];
            $_SESSION["clavePublica"] = $_POST['clavePublica'];
        } else {
            echo "La solicitud no es POST";
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
?>