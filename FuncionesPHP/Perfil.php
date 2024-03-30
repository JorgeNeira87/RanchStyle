<?php
    session_start();
    require_once ("conexion.php");
?>

<?php echo $_SESSION['Nombre']; ?>
<?php echo $_SESSION['Rango']; ?>
<?php echo $_SESSION['Contrasena']; ?>