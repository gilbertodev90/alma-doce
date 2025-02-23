console.log("Alma Doce - E-commerce");

let slideIndex = 0;
let autoSlideInterval;

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ajusta o índice para ficar dentro dos limites
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    // Move os slides
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializa o carrossel
    showSlides(slideIndex);
    startAutoSlide();

    // Adiciona eventos aos botões de controle
    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    document.querySelector('.carousel-control.next').addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
});