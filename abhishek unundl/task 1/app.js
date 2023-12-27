let currentIndex = 0;
function showSlide(index) {
    const carousel = document.getElementById('productCarousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
   if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
 currentIndex = index;
    const translateValue = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}
function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}
setInterval(nextSlide, 5000);

