
<?php
require_once("conexion.php");

try {

    $usuario = $_POST['usuario'];
    $cantidad = $_POST['cantidad'];
    $destinatario = $_POST['destinatario'];

    $sql = "UPDATE paco SET saldo = saldo- :cantidad WHERE id = :idtransferenccia";
    $remitente = $cnnPDO->prepare($sql);
    $remitente->bindParam(':idtransferenccia', $usuario);
    $remitente->bindParam(':cantidad', $cantidad);
    $remitente->execute();

    $sql2 = "UPDATE paco SET saldo = saldo+ :cantidad WHERE id = :iddestinatario";
    $adicion = $cnnPDO->prepare($sql2);
    $adicion->bindParam(':iddestinatario', $destinatario);
    $adicion->bindParam(':cantidad', $cantidad);
    $adicion->execute();

    $sql3 = "INSERT INTO transacciones (remitente_id, destinatario_id, cantidad) VALUES (:idtransferenccia, :iddestinatario, :cantidad)";
    $registo = $cnnPDO->prepare($sql3);
    $registo->bindParam(':idtransferenccia', $usuario);
    $registo->bindParam(':iddestinatario', $destinatario);
    $registo->bindParam(':cantidad', $cantidad);
    $registo->execute();

} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}

?>