<?php
   $destino="mapaula4321@gmail.com";
   $nombre=$_POST["nombre"];
   $correo=$_POST["email"];
   $fNace=$_POST["fecha"];
   $genero=$_POST["gen"];
   $gradoAcad=$_POST["gradoAcad"];

   $contenido="Nombre: "+ $nombre + "\nCorreo: "+  $correo + "\nFecha de nacimiento: " + $fNace +"\nGenero: " + 
   $genero +"\nGrado Academico: " + $gradoAcad ;

   $header="X-Mailer.PHP/".phpversion()."\r\n";
   $header.="Mimme-Version 1.0 \r\n";
   $header.="Content-Type;text/plain";

   mail($destino,"Contenido", $contenido,$header);
   echo "<label>Email enviado</label>";
?>