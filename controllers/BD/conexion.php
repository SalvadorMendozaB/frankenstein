<?php 
    $conexion = mysqli_connect("localhost","root","","friki_art_cja_bd");

    if(!isset($conexion)){
        echo "Hubo un error al conectar con la base de datos".mysqli_connect_error($conexion);
    }else{
        echo "Todo quedo funcionando bien";
    }

?>