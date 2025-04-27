document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.carousel-button.next');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const gap = 10; // Doit correspondre à la valeur de gap dans votre CSS

        if (!slides.length || !nextButton || !prevButton) {
            return; // Empêche les erreurs si des éléments sont manquants
        }

        let currentIndex = 0;

        function updateSlidePosition() {
            const slideWidth = slides[0].getBoundingClientRect().width + gap;
            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });

        // Initialisation de la position
        updateSlidePosition();
    });
});