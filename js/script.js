// Pobierz element przycisku mobilnego menu
const mobileMenuButton = document.querySelector("#mobileMenuButton");

// Pobierz element menu mobilnego
const mobileMenu = document.querySelector(".mobileMenu");

// Funkcja do obsługi kliknięcia przycisku mobilnego menu
function toggleMobileMenu() {
  // Toggle klasy "active" na elemencie menu mobilnego
  mobileMenu.classList.toggle("active");
}

// Nasłuchuj kliknięcia na przycisku mobilnego menu
mobileMenuButton.addEventListener("click", toggleMobileMenu);
