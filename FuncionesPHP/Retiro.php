<?php
    session_start();
    require_once ("conexion.php");
?>
<?php if(isset($_POST['Confirmacion'])){?>
    <?php echo $_POST['Cantidad']; ?>
<?php } ?>