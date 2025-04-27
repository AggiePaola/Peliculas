function search() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    if (searchQuery) {
        console.log("Buscando:", searchQuery);
        const peliculasFiltradas = peliculas.filter(pelicula =>
            pelicula.titulo.toLowerCase().includes(searchQuery)
        );

        // resultados
        if (peliculasFiltradas.length > 0) {
            alert("Se encontraron " + peliculasFiltradas.length + " resultados.");
            renderizarPeliculas(peliculasFiltradas);
        } else {
            alert("No se encontraron resultados.");
            renderizarPeliculas([]);
        }
    } else {
        console.log("No se ha ingresado texto, mostrando todas las películas.");
        renderizarPeliculas(peliculas);
    }

    $('#modalGeneral').modal('hide');
}

function renderizarPeliculas(peliculas) {
    const contenedor = document.getElementById("contenedor-peliculas");
    contenedor.innerHTML = ''; /
    // Crear las tarjetas de las películas
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
}