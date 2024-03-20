        <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-landmark me-2"></i>RANCH STYLE</h3>
                            </a>
                            <h3>Registro</h3>
                        </div>
                        <form method="post">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Nombre">
                                <label for="Nombre">Nombre</label>
                            </div>
                            <div class="form-floating mb-3">
                                    <select class="form-select" name="Tipo" id="Tipo" aria-label="Floating label select example">
                                        <option selected>Abre este menu</option>
                                        <option value="Debito">Debito</option>
                                        <option value="Ahorro">Ahorro</option>
                                        <option value="Tarjeta de crédito">Tarjeta de credito</option>
                                    </select>
                                    <label for="Tipo">Tipo de contraseña</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" name="Contrasena" id="Contrasena" placeholder="Contraseña">
                                <label for="Contrasena">Contraseña</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" name="Confirmacion" id="Confirmacion" placeholder="Contraseña">
                                <label for="Confirmacion">Confirmar contraseña</label>
                            </div>
                            <button type="submit" name="Registrase" class="btn btn-primary py-3 w-100 mb-4">Registrarse</button>
                            <p class="text-center mb-0">¿Ya tienes cuenta? <a href="Ingreso.php">Ingresar</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    </div>

    <?php
        if (isset($_POST['Registrase'])) {
            require_once("conexion.php");

            try {
                $Nombre = $_POST['Nombre'];
                $Tipo = $_POST['Tipo'];
                $Contrasena = $_POST['Contrasena'];
                echo $Nombre, $Tipo, $Contrasena;
        
                $sql = $cnnPDO->prepare("INSERT INTO usuarios (nombre, tipo, contrasena, saldo, estado, fecha, rango) VALUES (:nombre, :tipo, :contrasena, 0, 'Activo', current_timestamp(), 'Usuario' )");
                $sql->bindParam(':nombre', $Nombre);
                $sql->bindParam(':tipo', $Tipo);
                $sql->bindParam(':contrasena', $Contrasena);
        
                $sql -> execute();
            }catch(PDOException $e){
                echo "There is some problem in connection: " . $e->getMessage();
            }
            

        }
    ?>
