// Base de datos de las obras (Extraída del PDF)
const playsData = [
    {
        id: 1,
        title: "El Mago de Oz",
        author: "L. Frank Baum | Adapt: César Ferrón",
        synopsis: "Dorothy quiere escapar de casa para salvar a su perrito Totó, pero un tornado la lleva al maravilloso mundo de Oz. Junto a grandes amigos descubrirá que tiene todo lo necesario para volver a casa.",
        specs: {
            duration: "Aprox. 1 hora",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "7 actores",
            camerino: "Espejo y baño para 7 personas"
        },
        images: ["oz-1.jpg", "oz-2.jpg", "oz-3.jpg", "oz-4.jpg", "oz-5.jpg", "oz-6.jpg", "oz-7.jpg" , "oz-8.jpg", "oz-9.jpg" , "oz-10.jpg" ]
    },
    {
        id: 2,
        title: "El Coco",
        author: "Dino Buzatti | Adapt: Lorena Ovalle",
        synopsis: "El ingeniero Roberto Paudi y su hijo Franco se enfrentan a un extraño ser: el Coco. Una historia que nos enseña que todos tenemos un coco que representa nuestros miedos, y sin él, dejaríamos de soñar.",
        specs: {
            duration: "Aprox. 45 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 5 x 5 m (Oscuro)",
            setup: "2 horas",
            actors: "3 actores",
            camerino: "Espejo y baño para 3 personas"
        },
        images: ["coco-1.jpg", "coco-2.jpg", "coco-3.jpg", "coco-4.jpg", "coco-5.jpg", "coco-6.jpg", "coco-7.jpg"]
    },
    {
        id: 3,
        title: "El Gigante Egoísta y Mugroso",
        author: "Adaptación del cuento de Oscar Wilde",
        synopsis: "Un gigante egoísta corre a los niños de su jardín, pero al verlos divertirse no tiene más opción que integrarse. Una bella historia sobre amistad, tolerancia y el cuidado de la naturaleza.",
        specs: {
            duration: "Aprox. 40 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 5 x 4 m",
            setup: "2 horas",
            actors: "2 actores y 1 zanquero",
            camerino: "Espejo y baño para 3 personas"
        },
        images: ["gigante-1.jpg", "gigante-2.jpg", "gigante-3.jpg", "gigante-4.jpg", "gigante-5.jpg"]
    },
    {
        id: 4,
        title: "El Astuto Conejo del Prado",
        author: "De Mireya Cueto",
        synopsis: "Un conejo busca dormir pero el bosque es ruidoso. En su camino encuentra peligros como el lobo. Una fábula interactiva con títeres y actores donde la astucia es clave para sobrevivir.",
        specs: {
            duration: "Aprox. 40 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 5 x 4 m",
            setup: "2 horas",
            actors: "3 actores",
            camerino: "Espejo y baño para 3 personas"
        },
        images: ["conejo-1.JPG", "conejo-2.JPG", "conejo-3.JPG", "conejo-4.JPG", "conejo-5.JPG", "conejo-6.JPG"]
    },
    {
        id: 5,
        title: "El día en que la hoja 53 perdió sus letras",
        author: "Edna Ochoa | Adapt: Alma Cristal y Mario Galván",
        synopsis: "La hoja 53 despierta sin letras y sus amigas emprenden una misión para recuperarlas de un niño que las robó por amor a los versos. Una historia sobre el amor y respeto a los libros.",
        specs: {
            duration: "Aprox. 50 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "6 actores",
            camerino: "Espejo y baño para 6 personas"
        },
        images: ["hoja-1.jpg", "hoja-2.jpg", "hoja-3.jpg"]
    },
    {
        id: 6,
        title: "¡Cuidado! Microbios trabajando",
        author: "Adaptación de 'La Lente Maravillosa' de E. Carballido",
        synopsis: "Unos niños usan un lente maravilloso y hacen crecer microbios malvados. El cazador Joe Tiagarro y la Srta. Penny enseñarán lecciones de higiene para devolver todo a la normalidad.",
        specs: {
            duration: "Aprox. 50 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "6 actores",
            camerino: "Espejo y baño para 6 personas"
        },
        images: ["microbios-1.jpg", "microbios-2.jpg", "microbios-3.jpg"]
    },
    {
        id: 7,
        title: "El Secreto de la Navidad",
        author: "Original La Corte Teatral",
        synopsis: "En el taller de Santa, los duendes pierden el secreto de la Navidad. Villanos como Amargoso intentan robarlo. ¿Podrán salvar la felicidad de estas fiestas?",
        specs: {
            duration: "Aprox. 1 hora",
            audience: "Familiar, niños",
            stage: "Mínimo 5 x 4 m",
            setup: "2 horas",
            actors: "6 actores",
            camerino: "Espejo y baño para 6 personas"
        },
        images: ["navidad-1.jpg", "navidad-2.jpg", "navidad-3.jpg", "navidad-4.jpg", "navidad-5.jpg", "navidad-6.jpg", "navidad-7.jpg", "navidad-8.jpg", "navidad-9.jpg", "navidad-10.jpg"]
    },
    {
        id: 8,
        title: "La Búsqueda del Tesoro",
        author: "Joel Jiménez",
        synopsis: "Una aventura épica interactiva. Exploradores encuentran pistas, viajan en el tiempo y usan la imaginación para encontrar un cofre lleno de monedas de oro (que se pueden comer).",
        specs: {
            duration: "Aprox. 50 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "8 actores",
            camerino: "Espejo y baño para 6 personas"
        },
        images: ["tesoro-1.jpg", "tesoro-2.jpg"]
    },
    {
        id: 9,
        title: "Cuenta Cuentos",
        author: "Clásicos infantiles",
        synopsis: "Narración de cuentos clásicos (Gato con Botas, Caperucita, etc.) con música, vestuario y mucha interacción. Los niños dejan de ser espectadores para ser protagonistas.",
        specs: {
            duration: "Aprox. 40 minutos",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "1 actor",
            camerino: "Espejo y baño"
        },
        images: ["cuentos-1.jpg", "cuentos-2.jpg", "cuentos-3.jpg"]
    },
    {
        id: 10,
        title: "Mi amigo es un Monstruo",
        author: "La Corte Teatral",
        synopsis: "¿Pueden los monstruos y los niños ser amigos? Una tierna obra con bailes y canciones que nos enseña a vencer los miedos y no discriminar.",
        specs: {
            duration: "Aprox. 1 hora",
            audience: "Familiar, niños",
            stage: "Mínimo 6 x 3 m",
            setup: "2 horas",
            actors: "2 actores",
            camerino: "Espejo y baño"
        },
        images: ["monstruo-1.jpg", "monstruo-2.jpg", "monstruo-3.jpg", "monstruo-4.jpg", "monstruo-5.jpg", "monstruo-6.jpg", "monstruo-7.jpg", "monstruo-8.jpg", "monstruo-9.jpg", "monstruo-10.jpg", "monstruo-11.jpg"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('playsGrid');
    const modal = document.getElementById('playModal');
    const closeModal = document.querySelector('.close-modal');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Generar Tarjetas
    playsData.forEach(play => {
        const card = document.createElement('div');
        card.classList.add('play-card');
        
        // NOTA: Como no tengo tus imágenes, uso un placeholder de color o texto
        // En producción, reemplaza el src con: src="img/${play.images[0]}"
        
        
        // ESTA LÍNEA PONE TU PRIMERA FOTO REAL:
        const thumbUrl = `img/${play.images[0]}`;

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${thumbUrl}" alt="${play.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+No+Disponible'">
            </div>
            <div class="card-content">
                <div class="card-tags">
                    <span><i class="far fa-clock"></i> ${play.specs.duration}</span>
                    <span><i class="fas fa-users"></i> ${play.specs.actors}</span>
                </div>
                <h3>${play.title}</h3>
                <button class="btn-primary" style="padding: 10px 20px; font-size: 0.8rem;">Ver Detalles</button>
            </div>
        `;

        card.addEventListener('click', () => openModal(play));
        grid.appendChild(card);
    });

    // Menú Hamburguesa
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Lógica del Modal
    function openModal(play) {
        document.getElementById('modalTitle').textContent = play.title;
        document.getElementById('modalAuthor').textContent = play.author;
        document.getElementById('modalSynopsis').textContent = play.synopsis;
        document.getElementById('modalDuration').textContent = play.specs.duration;
        document.getElementById('modalTarget').textContent = play.specs.audience;
        document.getElementById('modalActors').textContent = play.specs.actors;
        document.getElementById('modalStage').textContent = play.specs.stage;
        document.getElementById('modalSetup').textContent = "Montaje: " + play.specs.setup;

        // Cargar Carrusel
        const track = document.getElementById('carouselSlide');
        track.innerHTML = ''; // Limpiar anterior
        currentSlide = 0;

        play.images.forEach(imgName => {
            const img = document.createElement('img');
            // Aquí intenta cargar tu imagen local, si falla carga placeholder
            img.src = `img/${imgName}`; 
            img.onerror = function() {
                this.src = `https://via.placeholder.com/800x400/D32F2F/FFFFFF?text=${encodeURIComponent(play.title)}+Foto`;
            };
            track.appendChild(img);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    }

    // Cerrar Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Lógica del Carrusel
    let currentSlide = 0;
    const track = document.getElementById('carouselSlide');
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        const totalImages = track.children.length;
        currentSlide = (currentSlide + 1) % totalImages;
        updateCarousel();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        const totalImages = track.children.length;
        currentSlide = (currentSlide - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const width = track.parentElement.clientWidth;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});