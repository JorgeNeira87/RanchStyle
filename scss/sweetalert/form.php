<?php
require_once 'cdn.html';
?>

<!DOCTYPE html>
<html>
<head>
	<title>jQuery</title>

	<!-- JQuery Validate library -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>
<body>
	<!-- Section NavBar -->
	<section>
		<nav class="navbar fixed-top " style="background-color: #FFFFFF;">
			<div class="container-fluid">
				<div class="page-header" style="color: #2E86C1;">
					<h4>Validación Con <strong>jQuery</strong> - Utilizando Método validate()</h4>
				</div>
				<div align="right">
					<label><strong>David Belmares&nbsp;</strong></label>
					<img src="images/db.png">
				</div>
			</div>
		</nav>
	</section>
	<!-- Section NavBar -->

	<!-- Section Formulario -->
	<section>
		<div class="container" style="width:30%;margin-top:80px;">
			<form id="form"  method="post" style="color: #757575;">
				<!-- nombre -->
            <label for="nombre" class="grey-text font-weight-light">Ingresa tu nombre</label>
            <input type="text" name="nombre" id="nombre" class="form-control">
            <br>

            <!-- Email -->
           <label for="email" class="grey-text font-weight-light">Ingresa tu email</label>
            <input type="text" name="email" id="email" class="form-control">
            <br>

            <!-- Celular -->
            <label for="celular" class="grey-text font-weight-light">Ingresa tu celular</label>
            <input type="text" name="celular" id="celular" class="form-control">
            <br>

            <!-- Contraseña -->
           <label for="password" class="grey-text font-weight-light">Ingresa tu contraseña</label>
            <input type="password" name="password" id="password" class="form-control">
            <br>

            <!-- Confirmar Contraseña -->
           <label for="confirmar" class="grey-text font-weight-light">Confirmar contraseña</label>
            <input type="password" name="confirmar" id="confirmar" class="form-control">
            <br>
			
				<button id="enviar" class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" name="enviar" type="submit">Validar</button>
			</form>
		</div>
	</section>
	<!-- Section Formulario -->

</body>
</html>

<Script>
  $(document).ready(function() {
    let formatoemail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $( "#enviar" ).click(function(){
          if ($("#nombre").val() == ""){
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Debe de Ingrese su Nombre...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 2500
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          } else if ($("#email").val() == "") {
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Debe de Ingrese su Correo...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 5000
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          } else if (!formatoemail.test($("#email").val())) {
            Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'El formato del correo es incorrecto',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 5000
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });
                      return false;
          } else if ($("#celular").val() == ""){
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Debe de Ingrese su Celular...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 2500
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          } else if ($("#password").val() == ""){
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Debe de Ingrese su Contraseña...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 2500
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          } else if ($("#confirmar").val() == ""){
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Las contraseñas no Coinciden...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 2500
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          } else if ($("#confirmar").val() !== $("#password").val()){
              Swal.fire({
                      icon: 'error',
                      title: 'Dato Incorrecto!',
                      text: 'Las contraseñas no Coinciden...',
                      //position: 'top-end',
                      showConfirmButton: true,
                      ConfirmButtonText: 'Aceptar',
                      timerProgressBar: true
                      //timer: 2500
                      
                      //}).then(function(){
                        // window.location="sweetalert.php"
                      });

              return false;
          }
        
      });
  });

</Script>