<?php
    session_start();
    $array = [
        'id' => $_SESSION["id"],
        'clavePrivada' => $_SESSION["clavePrivada"],
        'clavePublica' => $_SESSION["clavePublica"]
    ];

    $datos_json = json_encode($array);

        header('Content-Type: application/json');

        echo $datos_json;
?>