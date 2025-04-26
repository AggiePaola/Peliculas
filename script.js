const peliculas = [
    {
        titulo: "Flor",
        descripcion: "Flor bonita, redonda, rosada",
        imagen: "img/img_1.png"
    },
    {
        titulo: "Cactus",
        descripcion: "Un cactus resistente y verde",
        imagen: "img/img_2.png"
    },
    {
        titulo: "Sol",
        descripcion: "Una película brillante como el sol",
        imagen: "img/img_3.png"
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
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal${index}">
              Ver más
            </button>
          </div>
        </div>
      </div>
  
      <div class="modal fade" id="modal${index}" tabindex="-1" role="dialog" aria-labelledby="modalTitle${index}" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto">${pelicula.titulo}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">${pelicula.descripcion}</div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar detalles</button>
            </div>
          </div>
        </div>
      </div>
    `;
    contenedor.innerHTML += tarjeta;
});
