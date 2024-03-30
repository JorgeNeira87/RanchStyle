<?php
    session_start();
    require_once ("conexion.php");
?>
<?php
    $ContadorU = 0;
    $sql = $cnnPDO ->prepare("SELECT * FROM usuarios");
    $sql -> execute();
    $row = $sql -> fetchAll();

    foreach($row as $r){
?>
        <?php echo $r['nombre']; ?>
        <?php echo $r['numero']; ?>
        <?php echo $r['saldo']; ?>
        <?php echo $r['nombre']; ?>
        <?php echo $r['numero']; ?>
        <?php echo $r['tipo']; ?>
        <?php echo $r['contrasena']; ?>
        <?php echo $r['estado']; ?>
        <?php echo $r['fecha']; ?>
        <?php $ContadorU++;
    }
    $ContadorU = 0;
?>