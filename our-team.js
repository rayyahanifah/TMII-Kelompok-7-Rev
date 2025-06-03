let current = 0;
const images = document.querySelectorAll("#carousel img");

function showSlide(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function autoSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

showSlide(current);
setInterval(autoSlide, 3500);
