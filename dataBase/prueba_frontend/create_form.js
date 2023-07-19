// Get our input reference.

function enviarDatos() {
 
  let error = document.getElementById("error-datos");
 
  let nombre = document.getElementById("input-nombre").value;
  let descripcion = document.getElementById("input-descripcion").value;
  let diametro = document.getElementById("input-diametro").value;
  let precio = document.getElementById("input-precio").value;
  let imagen = document.getElementById("input-imagen").value;
  let estado = document.getElementById("input-estado").value;

  if (nombre === "" || descripcion === "" || diametro === "" || precio === "" || imagen === "" || estado === "") {
    return error.textContent = "Todos los campos son obligatorios";
  } 

  fetch("http://localhost:3000/create", {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      diametro: diametro,
      precio: precio,
      imagen: imagen,
      estado: estado
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      console.log({
        Origen: "Recibiendo respuesta de la API",
        status: response.status,
        statusText: response.statusText,
        response: response.text(),
      });
      if (response.status === 200) {
        document.getElementById("input-nombre").value = "";
        document.getElementById("input-descripcion").value = "";
        document.getElementById("input-diametro").value = "";
        document.getElementById("input-precio").value = "";
        document.getElementById("input-imagen").value = "";
        document.getElementById("input-estado").value = "";
        alert("Producto creado correctamente");
      } else {
        alert("Error al crear el producto");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
