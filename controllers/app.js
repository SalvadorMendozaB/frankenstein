$(document).ready(function () {
  $.ajax({
    url: "../controllers/BD/listarProductosIndex.php",
    type: "GET",
    success: function (response) {
      let productos = JSON.parse(response);
      let plantilla = "";
      console.log(response);
      productos.forEach((producto) => {
        plantilla += `
                 <form method="POST" action = "./detalleProducto.html" class="formDetalle">
                 <button type="submit" class = "botonFormDetalle">
        <article class="articulo">
            <img src="${producto.imagen}" alt="esperanding">
            <div class="nombre"> $ ${producto.nombre} </div>
            <div class="precio"> $ ${producto.precio} </div>
        </article>
<<<<<<< HEAD
        </button>
      </form> `;
      });
      $("#mainIndex").html(plantilla);
    },
  });
});
=======
      </form> `
             })
         }

     });

})
>>>>>>> 454452525804ac77aca7f23a4242c6be7130a88b
