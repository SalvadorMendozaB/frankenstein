$(document).ready(function(){

     $.ajax({
         url: "../controllers/BD/listarProductosIndex.php",
         type: "GET",
         success: function(response) {
             //let productos = JSON.parse(response);
             let plantilla = "";
             console.log(response);
             /*productos.foreach((producto) => {
                 plantilla += `
                 <a href = "./detalleProducto.html">
        <article class="articulo">
            <img src="" alt="esperanding">
            <div class="nombre"> Camiseta Yuno Mirai Niki </div>
            <div class="precio"> $850 </div>
        </article>
      </a> `
             })*/
         }

     })

     $('#inputBusqueda').keyup(function(e){
         if($('#inputBusqueda').val()){
             let buscar=$('#inputBusqueda').val();
             $.ajax({
                 url:'./BD/buscar.php',
                 type: 'POST',
                 data: {buscar},
                 seccess: function(response){
                     let obj=JSON.parse(response);
                     let template= '';
                     obj.forEach(objs=>{
                         template+=`<li>
                         ${objs.nom_producto}
                         </li>`
                     });
                     console.log(obj);
                     $('#ulMuestra').html(template);

                 }
             });
         }
     })
})