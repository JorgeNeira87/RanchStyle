<?php
    session_start();
    $array = [
        'nombre' => $_SESSION["nombre"],
        'apellido' => $_SESSION["apellidos"],
        'nombrecompleto' => $_SESSION["nombrecompleto"],
        'email' => $_SESSION["correo"],
        'picture' => $_SESSION["imagen"],
        'id' => $_SESSION["id"]
    ];

    $datos_json = json_encode($array);

        header('Content-Type: application/json');

        echo $datos_json;
?>