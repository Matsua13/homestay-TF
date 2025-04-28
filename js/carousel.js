document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.carousel-button.next');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const gap = 10; // Must correspond to the gap value in your CSS

        if (!slides.length || !nextButton || !prevButton) {
            return; // Prevents errors if elements are missing
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

        // Position Initialization
        updateSlidePosition();
    });
});