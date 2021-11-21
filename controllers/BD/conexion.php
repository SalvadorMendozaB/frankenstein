<?php 
    $conexion = mysqli_connect("localhost","root","","friki_art_cja_bd");
    if(isset($conexion)){
        echo "conectado exitosamente";
    }else{
        echo "error";
    }

?>