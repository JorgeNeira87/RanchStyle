<?php
    session_start();
    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $_SESSION["correo"] = $_POST['email'];
            $_SESSION["nombre"] = $_POST['given_name'];
            $_SESSION["apellidos"] = $_POST['family_name'];
            $_SESSION["nombrecompleto"] = $_POST['name'];
            $_SESSION["imagen"] = $_POST['picture'];
            $_SESSION["id"] = $_POST['id'];
        } else {
            echo "La solicitud no es POST";
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }
?>