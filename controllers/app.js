$(document).ready(function () {
  $.ajax({
    url: "../controllers/BD/listarProductosIndex.php",
    type: "GET",
    success: function (response) {
      let productos = JSON.parse(response);
      let plantilla = "";
      console.log(productos);
      productos.forEach((producto) => {
        plantilla += `
                 <form method="POST" action = "./detalleProducto.html" class="formDetalle">
                 <button type="submit" class = "botonFormDetalle">
        <article class="articulo">
            <img src="${producto.imagen}" alt="esperanding">
            <div class="nombre"> $ ${producto.nombre} </div>
            <div class="precio"> $ ${producto.precio} </div>
        </article>
        </button>
      </form> `;
      });
      $("#mainIndex").html(plantilla);
    },
  });
});
