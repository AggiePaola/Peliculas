
const contenedor = document.getElementById("contenedor-peliculas");

// Crea las tarjetas de las películas
peliculas.forEach((pelicula, index) => {
  const tarjeta = `
    <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
      <div class="card">
        <img class="card-img-top mi-imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
        <div class="card-body text-center">
          <h4 class="card-title">${pelicula.titulo}</h4>
          <p class="card-text">${pelicula.descripcion}</p>
          <button type="button" 
                  class="btn btn-danger btn-lg" 
                  data-toggle="modal" 
                  data-target="#modalGeneral"
                  data-titulo="${pelicula.titulo}"
                  data-descripcion="${pelicula.descripcion2}"
                  data-imagen="${pelicula.imagen2}"
                  data-actores='${JSON.stringify(pelicula.actores)}'> <!-- Aquí pasamos los actores -->
            Ver más
          </button>
        </div>
      </div>
    </div>
  `;
  contenedor.innerHTML += tarjeta;
});

// Ahora creamos UN SOLO MODAL GENERAL:
const modalHTML = `
  <div class="modal fade" id="modalGeneral" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mx-auto" id="modalTitulo">Título aquí</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div class="modal-body d-flex">
            <!-- Columna para la imagen -->
            <div class="col-md-4">
              <img id="modalImagen" class="img-fluid" src="" alt="imagen de película">
            </div>
            <!-- Columna para la descripción -->
            <div class="col-md-8">
              <p id="modalDescripcion">Descripción aquí</p>
              <h6>Actores:</h6>
              <div id="modalActores"></div>
            </div>
          </div>

        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar detalles de la película</button>
        </div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

// Usamos delegación de eventos para manejar los clics en el botón "Ver más"
$(document).on('click', '[data-toggle="modal"]', function (event) {
  var button = $(event.currentTarget); // Botón que abrió el modal
  var titulo = button.data('titulo');
  var descripcion = button.data('descripcion');
  var imagen = button.data('imagen');
  var actores = button.data('actores'); // Obtener los actores como array de objetos

  console.log(titulo, descripcion, imagen, actores); // Verifica que los datos se pasen correctamente

  var modal = $('#modalGeneral');
  modal.find('#modalTitulo').text(titulo);
  modal.find('#modalDescripcion').text(descripcion);
  modal.find('#modalImagen').attr('src', imagen); // Cambia la imagen dentro del modal

  // Limpiar la lista de actores
  var actoresList = modal.find('#modalActores');
  actoresList.empty(); // Limpiar antes de añadir nuevos actores

  // Agregar actores con imagen
  actores.forEach(function (actor) {
    var actorHTML = `
      <div class="actor">
        <img src="${actor.imagen}" alt="${actor.nombre}" class="img-fluid" style="width: 50px; height: 50px; border-radius: 50%;">
        <p>${actor.nombre}</p>
      </div>
    `;
    actoresList.append(actorHTML);
  });

  // Asegúrate de que el modal se muestra
  $('#modalGeneral').modal('show');
});



