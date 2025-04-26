const peliculas = [
  {
    titulo: "¡Caigan las rosas blancas!",
    descripcion: "Flor bonita, rosada",
    descripcion2: "aaaaaaaaaaaaa",
    imagen: "img/img_1.png"
  },
  {
    titulo: "¡Caigan las  blancas!",
    descripcion: "Flor bonita, rosada",
    descripcion2: "eeeeeeeeeeeeeeeee",
    imagen: "img/img_1.png"
  }

];

const contenedor = document.getElementById("contenedor-peliculas");

peliculas.forEach((pelicula, index) => {
  const tarjeta = `
    <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
      <div class="card">
        <img class="card-img-top mi-imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
        <div class="card-body text-center">
          <h4 class="card-title">${pelicula.titulo}</h4>
          <p class="card-text">${pelicula.descripcion}</p>
          <button type="button" 
                  class="btn btn-primary btn-lg" 
                  data-toggle="modal" 
                  data-target="#modalGeneral"
                  data-titulo="${pelicula.titulo}"
                  data-descripcion="${pelicula.descripcion2}">
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
        <div class="modal-body" id="modalDescripcion">
          Descripción aquí
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar detalles de la película</button>
        </div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

// Y ahora hacemos que el modal cambie su contenido dinámicamente:
$('#modalGeneral').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Botón que abrió el modal
  var titulo = button.data('titulo');
  var descripcion = button.data('descripcion');

  var modal = $(this);
  modal.find('#modalTitulo').text(titulo);
  modal.find('#modalDescripcion').text(descripcion);
});
