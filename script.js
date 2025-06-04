document.getElementById("nextPage").addEventListener("click", function() {
  window.location.href = "https://www.tamanmini.com";
});

// Fungsi tombol pada card
function goToPage(page) {
  window.location.href = page;
}

function scrollToNextSection() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
