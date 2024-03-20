<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>DarkPan - Bootstrap 5 Admin Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link rel="icon" href=".\img\icon.png">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"> 
    
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->


        <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.php" class="">
                                <h3 class="text-primary"><i class="fa fa-landmark me-2"></i>RANCH STYLE</h3>
                            </a>
                            <h3>Registro</h3>
                        </div>
                        <form action="Funcion.php" method="post">
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" name="Numero" id="Numero" placeholder="Nombre">
                                <label for="Numero">Numero</label>
                            </div>
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
                            <button type="submit" name="Registrase" id="Registrase" class="btn btn-primary py-3 w-100 mb-4">Registrarse</button>
                            <p class="text-center mb-0">¿Ya tienes cuenta? <a href="Ingreso.php">Ingresar</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/chart/chart.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $(document).ready(function(){
            $( "#Registrase" ).click(function(){
                if ($("#Numero").val() == "") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Dato Incorrecto!',
                        text: 'Debe de ingresar un numero para su cuenta...',
                        showConfirmButton: true,
                        ConfirmButtonText: 'Aceptar',
                        confirmButtonColor: 'rgb(235, 22, 22)',
                        backdrop: `
                            rgba(25, 28, 36,0.4)
                            url("./img/Nyan-cat.gif")
                            left top
                            no-repeat
                        `
                    });
                } else if ($("#Nombre").val() == ""){
                    Swal.fire({
                        icon: 'error',
                        title: 'Dato Incorrecto!',
                        text: 'Debe de ingresar su nombre para su cuenta...',
                        showConfirmButton: true,
                        ConfirmButtonText: 'Aceptar',
                        timerProgressBar: true
                    });
                } else if ($("#Contrasena").val() == ""){
                    Swal.fire({
                        icon: 'error',
                        title: 'Dato Incorrecto!',
                        text: 'Debe de ingresar una contraeña...',
                        showConfirmButton: true,
                        ConfirmButtonText: 'Aceptar',
                        timerProgressBar: true
                    });
                } else if ($("#Confirmacion").val() == ""){
                    Swal.fire({
                        icon: 'error',
                        title: 'Dato Incorrecto!',
                        text: 'Debe de ingresar confirmar su contraeña...',
                        showConfirmButton: true,
                        ConfirmButtonText: 'Aceptar',
                        timerProgressBar: true
                    });
                } else if ($("#Confirmacion").val() !== $("#Contrasena").val()){
                    Swal.fire({
                        icon: 'error',
                        title: 'Dato Incorrecto!',
                        text: 'Las contraseñas deben coincidir...',
                        showConfirmButton: true,
                        ConfirmButtonText: 'Aceptar',
                        timerProgressBar: true
                    });
                }
            });
        });
    </script>
</body>

</html>