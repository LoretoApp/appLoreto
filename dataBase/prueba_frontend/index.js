const contenedorCard = document.getElementById('contenedor-card')

fetch("http://localhost:3000/showtartas")
.then(Response => Response.json())
.then(tartaletas => {
  tartaletas.forEach(tarta => {
    addTarta(tarta)
  });
})


// function crear tarta en html 

function addTarta(tarta) {
  const inyectarHTML = 
  '<div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">' + 
  '<div class="card" >'+
  '<div class="img-container m-3">'+ '<div class="m-3">' +
  '<img src="./assets/img/img-sinFondo/351156320_623672149785377_582990706240363725_n-removebg-preview (1).png" class="card-img-top" alt="torta maracuya">'+ '</div>'+
  '<div class="btn-detalle mb-2">' + 
  '<button class="btn detalle card-text">+ Detalle</button>' +
  '</div>' + '</div>' + '<div class="card-body p-0">' + '<div>' +
  '<h5 class="card-title">'+ tarta.nombre + '</h5>' + '</div>'+
  '<div class="d-inline">'+ '<p class="card-text porciones">'+ tarta.diametro + '</p>' +
  '</div>'+ '<div class="d-flex text-center align-items-center justify-content-around mt-2 ">'+
  '<p class="card-text precio">'+'$' + tarta.precio + '</p>' +
  '<a href="#" class="btn boton-agregar align-content-end mb-2">agregar</a>'+ '</div>'+
  '</div>' + '</div>' + '</div>';

  contenedorCard.innerHTML += inyectarHTML;

}