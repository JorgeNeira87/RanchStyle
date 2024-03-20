<?php
    session_start();
    require_once("conexion.php");

    // Registro
    if (isset($_POST['Registrase'])) {
        try {
            $Numero = $_POST['Numero'];
            $Nombre = $_POST['Nombre'];
            $Tipo = $_POST['Tipo'];
            $Contrasena = $_POST['Contrasena'];

            $sql = $cnnPDO->prepare("INSERT INTO usuarios (numero, nombre, tipo, contrasena, saldo, estado, fecha, rango) VALUES (:numero, :nombre, :tipo, :contrasena, 0, 'Activo', current_timestamp(), 'Usuario' )");
            $sql->bindParam(':numero', $Numero);
            $sql->bindParam(':nombre', $Nombre);
            $sql->bindParam(':tipo', $Tipo);
            $sql->bindParam(':contrasena', $Contrasena);

            if ($sql -> execute() === true) {
                header("location:index.php");
            }
        }catch(PDOException $e){
            echo "There is some problem in connection: " . $e->getMessage();
        }
    }
    // Login
    if (isset($_POST['Ingresar'])) {
        try {
            $Numero = $_POST['Numero'];
            $Contrasena = $_POST['Contrasena'];

            $sql = $cnnPDO->prepare("SELECT * FROM usuarios WHERE numero = :numero AND contrasena = :contrasena");
            $sql->bindParam(':numero', $Numero);
            $sql->bindParam(':contrasena', $Contrasena);

            $sql -> execute();
            $row = $sql -> fetchAll();

            foreach ($row as $r) {
                $_SESSION['Numero'] = $r['numero'];
                $_SESSION['Nombre'] = $r['nombre'];
                $_SESSION['Rango'] = $r['rango'];
                $_SESSION['Saldo'] = $r['saldo'];
                $_SESSION['Tipo'] = $r['tipo'];
                $_SESSION['Fecha'] = $r['fecha'];
                $_SESSION['Contrasena'] = $r['contrasena'];

                if ($r['estado'] == "Activo") {
                    if ($r['rango'] == "Usuario") {
                        header("location:Principal.php");
                    } elseif ($r['rango'] == "Administrador") {
                        header("location:Administrador.php");
                    }
                } else {
                    echo "La cuenta no esta activa <a href='index.php'>Regresar</a>";
                }
            }
            
        } catch (PDOException $e) {
            echo "There is some problem in connection: " . $e->getMessage();
        }
    }
    // Retiros
    if (isset($_POST['Confirmacion'])) {
        $sql = $cnnPDO ->prepare("SELECT * FROM usuarios WHERE numero = :numero AND contrasena = :contrasena");
        $sql -> bindParam(':numero', $_SESSION['Numero']);
        $sql -> bindParam(':contrasena', $_POST['Contraseña']);
        
        if ($sql -> execute() === true) {
            $row = $sql -> fetchAll();

            foreach ($row as $r) {
                $retiro = $r['saldo'] - $_POST['Cantidad'];

                if ($retiro >= 0) {
                    $rt = $cnnPDO -> prepare("UPDATE usuarios SET saldo = '" . $retiro . "' WHERE numero = " . $_SESSION['Numero']);
                    $rt -> execute();
                    $rg = $cnnPDO -> prepare("INSERT INTO registros VALUES (NULL, :usuario, :cantidad, current_timestamp(), 'Retiro')");
                    $rg -> bindParam(':usuario', $_SESSION['Nombre']);
                    $rg -> bindParam(':cantidad', $_POST['Cantidad']);
                    $rg -> execute();
                    $_SESSION['Saldo'] = $retiro;
                    header("location:Principal.php");
                } else {
                    echo '<div id="emailHelp" class="form-text">Saldo insuficiente.</div>';
                }
            }
        } else {
            echo 'Verifique su contraseña, <a href="Principal.php">Regresar</a>';
        }
    }
    // Desactivar cuenta
    if (isset($_POST['Desactivar'])) {
        $sql = $cnnPDO ->prepare("UPDATE usuarios SET estado = 'Desactivo' WHERE numero = " . $_SESSION['Numero']);
        $sql -> execute();
        session_destroy();
        header("location:index.php");
    }
    // Activar cuenta
    if (isset($_POST['Activar'])) {
        try {
            $Numero = $_POST['Numero'];
            $Contrasena = $_POST['Contrasena'];

            $sql = $cnnPDO->prepare("UPDATE usuarios SET estado = 'Activo' WHERE numero = :numero AND contrasena = :contrasena");
            $sql->bindParam(':numero', $Numero);
            $sql->bindParam(':contrasena', $Contrasena);

            $sql -> execute();
            
            header("location:Ingreso.php");
        } catch (PDOException $e) {
            echo "There is some problem in connection: " . $e->getMessage();
        }
    }
    // Despositos
    if (isset($_POST['Depositar'])) {
        $sql = $cnnPDO ->prepare("SELECT * FROM usuarios WHERE numero = " . $_POST['Usuario']);
        $sql -> execute();
        $row = $sql -> fetchAll();
        
        foreach ($row as $r) {
            $deposito = $row['saldo'] + $_POST['Cantidad'];

            $rt = $cnnPDO -> prepare("UPDATE usuarios SET saldo = '" . $deposito . "' WHERE numero = " . $_POST['Usuario']);
            $rt -> execute();
            $rg = $cnnPDO -> prepare("INSERT INTO registros VALUES (NULL, :usuario, :cantidad, current_timestamp(), 'Deposito')");
            $rg -> bindParam(':usuario', $r['nombre']);
            $rg -> bindParam(':cantidad', $_POST['Cantidad']);
            $rg -> execute();
            header("location:Administrador.php");
        }
    }
?>