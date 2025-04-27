const peliculas = [
    {
        titulo: "Game of Thrones",
        descripcion: "Acción",
        descripcion2: "Game of Thrones (conocida como Juego de tronos en España y abreviada como GOT) es una serie de televisión de drama y fantasía medieval desarrollada por David Benioff y D. B. Weiss y producida por la cadena HBO. Su argumento está inspirado en la serie de novelas Canción de hielo y fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos que conforman el territorio",
        imagen: "img/img_1.png",
        imagen2: "img/img_1_1.png",
        actores: [
            { nombre: "Emilia Clarke", imagen: "img/img_1_2.png" },
            { nombre: "Peter Dinklage", imagen: "img/img_1_3.png" },
            { nombre: "Kit Harington", imagen: "img/img_1_4.png" }
        ]
    },
    {
        titulo: "The Last of Us",
        descripcion: "Postapocalíptico",
        descripcion2: "The Last of Us es una serie de televisión estadounidense de drama postapocalíptica creado por Craig Mazin y Neil Druckmann para HBO. Basada en el videojuego de 2013 del mismo nombre desarrollado por Naughty Dog, la serie se ambienta veinte años después de una pandemia causada por una infección fúngica masiva, que hace que sus huéspedes se transformen en criaturas similares a zombis y causen el colapso de la sociedad. La primera temporada, basada en The Last of Us de 2013, sigue a Joel (Pedro Pascal), un contrabandista encargado de escoltar a la adolescente Ellie (Bella Ramsey) a través de un Estados Unidos postapocalíptico. La segunda temporada, que se espera que adapte parcialmente The Last of Us Part II de 2020, se ambienta cinco años después y presenta a Abby (Kaitlyn Dever).",
        imagen: "img/img_2.png",
        imagen2: "img/img_2_2.png",
        actores: [
            { nombre: "Emilia Clarke", imagen: "img/img_2_2.png" },
            { nombre: "Peter Dinklage", imagen: "img/img_2_3.png" },
            { nombre: "Kit Harington", imagen: "img/img_2_4.png" }
        ]
    },
    {
        titulo: "Inception",
        descripcion: "Ciencia Ficción",
        descripcion2: "Un ladrón especializado en robar secretos a través de los sueños recibe una oferta para borrar su historial criminal, pero debe realizar un último trabajo: implantar una idea en la mente de una persona.",
        imagen: "img/img_3.png",
        imagen2: "img/img_3_1.png",
        actores: [
            { nombre: "ELeonardo DiCaprio", imagen: "img/img_3_2.png" },
            { nombre: "Joseph Gordon-Levitt", imagen: "img/img_3_3.png" },
            { nombre: "Ellen Page", imagen: "img/img_3_4.png" }
        ]
    }, {
        titulo: "The Shawshank Redemption",
        descripcion: "Drama",
        descripcion2: "Andy Dufresne, un hombre condenado por el asesinato de su esposa, pasa años en prisión haciendo una amistad con otro recluso llamado Ellis Redding.",
        imagen: "img/img_4.png",
        imagen2: "img/img_4_1.png",
        actores: [
            { nombre: "Tim Robbins", imagen: "img/img_4_2.png" },
            { nombre: "Morgan Freeman", imagen: "img/img_4_3.png" },
            { nombre: "Bob Gunton", imagen: "img/img_4_4.png" }
        ]
    }, {
        titulo: "The Dark Knight",
        descripcion: "Acción, Crimen",
        descripcion2: "Batman lucha contra el caos que está desatando el Joker, un criminal impredecible que busca destruir la ciudad de Gotham.",
        imagen: "img/img_5.png",
        imagen2: "img/img_5_1.png",
        actores: [
            { nombre: "Christian Bale", imagen: "img/img_5_2.png" },
            { nombre: "Heath Ledger", imagen: "img/img_5_3.png" },
            { nombre: "Aaron Eckhart", imagen: "img/img_5_4.png" }
        ]
    }, {
        titulo: "The Godfather",
        descripcion: "Crimen, Drama",
        descripcion2: "La historia de la familia Corleone, una poderosa familia mafiosa en Nueva York, que lucha por mantener su imperio mientras lidian con la traición interna.",
        imagen: "img/img_6.png",
        imagen2: "img/img_6_1.png",
        actores: [
            { nombre: "Marlon Brando", imagen: "img/img_6_2.png" },
            { nombre: "James Caan", imagen: "img/img_6_3.png" },
            { nombre: "Al Pacino", imagen: "img/img_6_4.png" }
        ]
    }, {
        titulo: "Schindler's List",
        descripcion: "Drama, Bélico",
        descripcion2: "La historia real de Oskar Schindler, un empresario alemán que salva la vida de más de mil judíos durante el Holocausto Gump, un hombre con un coeficiente intelectual bajo, se ve envuelto en varios eventos históricos mientras sigue su amor por Jenny",
        imagen: "img/img_.png",
        imagen2: "img/img_1_1.png",
        actores: [
            { nombre: "Liam Neeson", imagen: "img/img_7_2.png" },
            { nombre: "Ben Kingsley", imagen: "img/img_7_3.png" },
            { nombre: "Ralph Fiennes", imagen: "img/img_7_4.png" }
        ]
    }, {
        titulo: "Pulp Fiction",
        descripcion: "Crimen, Drama",
        descripcion2: "Varias historias interconectadas sobre el crimen en Los Ángeles, contadas de manera no lineal.",
        imagen: "img/img_1.png",
        imagen2: "img/img_1_1.png",
        actores: [
            { nombre: "John Travolta", imagen: "img/img_8_2.png" },
            { nombre: "Uma Thurman", imagen: "img/img_8_3.png" },
            { nombre: "Samuel L. Jackson", imagen: "img/img_8_4.png" }
        ]
    }, {
        titulo: "The Matrix",
        descripcion: "Ciencia Ficción, Acción",
        descripcion2: "Un hacker llamado Neo descubre que el mundo en el que vive es una simulación creada por máquinas para controlar a la humanidad.",
        imagen: "img/img_1.png",
        imagen2: "img/img_1_1.png",
        actores: [
            { nombre: "Keanu Reeves", imagen: "img/img_9_2.png" },
            { nombre: "Laurence Fishburne", imagen: "img/img_9_3.png" },
            { nombre: "Carrie-Anne Moss", imagen: "img/img_9_4.png" }
        ]
    },
];