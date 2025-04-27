function search() {
    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Verificar si hay un valor en el campo de búsqueda
    if (searchQuery) {
        console.log("Buscando:", searchQuery);

        // Filtrar las películas que coinciden con el término de búsqueda en el título
        const peliculasFiltradas = peliculas.filter(pelicula =>
            pelicula.titulo.toLowerCase().includes(searchQuery)
        );

        // Mostrar los resultados
        if (peliculasFiltradas.length > 0) {
            alert("Se encontraron " + peliculasFiltradas.length + " resultados.");
            renderizarPeliculas(peliculasFiltradas);
        } else {
            alert("No se encontraron resultados.");
            renderizarPeliculas([]); // En caso de no encontrar resultados, muestra vacío
        }
    } else {
        // Si el campo está vacío, mostrar todas las películas
        console.log("No se ha ingresado texto, mostrando todas las películas.");
        renderizarPeliculas(peliculas);  // Renderiza todas las películas
    }
}

function renderizarPeliculas(peliculas) {
    const contenedor = document.getElementById("contenedor-peliculas");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar las nuevas tarjetas

    peliculas.forEach((pelicula) => {
        const tarjeta = `
            <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card">
                    <img class="card-img-top mi-imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
                    <div class="card-body text-center">
                        <h4 class="card-title">${pelicula.titulo}</h4>
                        <p class="card-text">${pelicula.descripcion}</p>
                        <button type="button" class="btn btn-primary btn-lg" 
                                data-toggle="modal" 
                                data-target="#modalGeneral" 
                                data-titulo="${pelicula.titulo}" 
                                data-descripcion="${pelicula.descripcion}" 
                                data-imagen="${pelicula.imagen}">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta;
    });

    // Delegación de eventos para el botón "Ver más"
    contenedor.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('btn-primary')) {
            const button = event.target;
            const titulo = button.getAttribute('data-titulo');
            const descripcion = button.getAttribute('data-descripcion');
            const imagen = button.getAttribute('data-imagen');

            // Mostrar la información en el modal
            const modal = $('#modalGeneral');
            modal.find('#modalTitulo').text(titulo);
            modal.find('#modalDescripcion').text(descripcion);
            modal.find('#modalImagen').attr('src', imagen);
        }
    });
}

