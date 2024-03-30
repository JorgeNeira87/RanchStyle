<?php
    session_start();
    require_once ("conexion.php");
?>
<?php echo $_SESSION['Nombre']; ?>
<?php echo $_SESSION['Rango']; ?>
<?php echo $_SESSION['Nombre']; ?>
<?php echo $_SESSION['Saldo']; ?>
<?php echo $_SESSION['Tipo']; ?>
<?php echo $_SESSION['Numero']; ?>
<?php echo $_SESSION['Fecha']; ?>
<?php
    $ContadorR = 0;
    $sql = $cnnPDO ->prepare("SELECT * FROM registros");
    $sql -> execute();
    $row = $sql -> fetchAll();

    foreach($row as $r){
?>
        <?php echo $r['id']; ?>
        <?php echo $r['usuario']; ?>
        <?php if ($r['tipo'] == "Retiro") { ?>
            <?php echo $r['cantidad']; ?>
        <?php } elseif ($r['tipo'] == "Deposito") { ?>
            <?php echo $r['cantidad']; ?>
        <?php  } ?>
        <?php echo $r['fecha']; ?>
        <?php
        $ContadorR++;
    }
$ContadorR = 0; ?>