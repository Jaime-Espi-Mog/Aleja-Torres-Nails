// Mostrar detalles de los servicios al hacer clic
function mostrarDetalle(servicio) {
    const detalle = document.getElementById('detalle-servicio');
    let contenido = '';

    switch (servicio) {
        case 'semipermanente':
            contenido = `
                <img src="images/semipermanente.jpg" alt="Semipermanente">
                <p>El esmaltado semipermanente es una técnica que dura hasta 3 semanas sin perder brillo.</p>
            `;
            break;
        case 'acrilico':
            contenido = `
                <img src="images/acrilico.jpg" alt="Baño en acrílico">
                <p>El baño en acrílico es ideal para fortalecer y dar durabilidad a tus uñas.</p>
            `;
            break;
        case 'esculpidas':
            contenido = `
                <img src="images/esculpidas.jpg" alt="Uñas esculpidas">
                <p>Las uñas esculpidas son perfectas para lucir unas manos elegantes y sofisticadas.</p>
            `;
            break;
        case 'manicura':
            contenido = `
                <img src="images/manicura.jpg" alt="Manicura y pedicura">
                <p>La manicura y pedicura incluyen limpieza, corte y esmaltado de uñas.</p>
            `;
            break;
        default:
            contenido = '';
    }

    detalle.innerHTML = contenido;
}

// Carrusel de imágenes en la galería
let currentIndex = 0;
const images = document.querySelectorAll('.galeria-grid img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

// Iniciar el carrusel
if (images.length > 0) {
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
}

// Validar un formulario de contacto (si lo agregas en el futuro)
document.querySelector('#contacto form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado.`);
        // Aquí podrías enviar los datos a un servidor
    }
});

/*
let currentindex = 0;

function moverCarrusel(direccion) {
    const carruselInner = document.querySelector('.carrusel-inner');
    const totalItems = document.querySelectorAll('.carrusel-item').length;

    currentIndex += direccion;

    // Si llega al final, vuelve al principio
    if (currentindex >= totalItems) {
        currentindex = 0;
    }

    // Si llega al principio, va al final
    if (currentindex < 0) {
        currentindex = totalItems - 1;
    }

    // Mueve el carrusel
    carruselInner.style.transform = `translateX(-${currentindex * 100}%)`;
}

// Carrusel automático (opcional)
setInterval(() => moverCarrusel(1), 3000); // Cambia la imagen cada 3 segundos
*/

const currentindex = 0;

function moverCarrusel(direccion) {
    const carruselInner = document.querySelector('.carrusel-inner');
    const totalItems = document.querySelectorAll('.carrusel-item').length;

    currentIndex += direccion;

    // Si llega al final, vuelve al principio
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Si llega al principio, va al final
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Mueve el carrusel
    carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Carrusel automático
setInterval(() => moverCarrusel(1), 3000); // Cambia la imagen cada 3 segundos