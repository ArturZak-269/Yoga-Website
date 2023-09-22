// Funkcja, która sprawdza, czy użytkownik zaakceptował pliki cookie
function checkCookiesAccepted() {
  // Sprawdź, czy istnieje odpowiednia zmienna cookie
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  // Jeśli użytkownik zaakceptował pliki cookie, ukryj komunikat
  if (cookiesAccepted === "true") {
    const cookiesPopup = document.getElementById("cookies-popup");
    cookiesPopup.style.display = "none";
  }
}

// Funkcja, która ustawia zmienną cookie po zaakceptowaniu plików cookie
function setCookiesAccepted() {
  localStorage.setItem("cookiesAccepted", "true");
}

// Funkcja obsługująca kliknięcie przycisku "Zaakceptuj" w komunikacie o plikach cookie
function acceptCookies() {
  const cookiesPopup = document.getElementById("cookies-popup");
  cookiesPopup.style.display = "none";
  setCookiesAccepted();
}

// Funkcja obsługująca kliknięcie przycisku "Odrzuć" w komunikacie o plikach cookie
function rejectCookies() {
  const cookiesPopup = document.getElementById("cookies-popup");
  cookiesPopup.style.display = "none";
}

// Sprawdź, czy użytkownik zaakceptował pliki cookie po załadowaniu strony
checkCookiesAccepted();

// Dodaj obsługę kliknięć przycisków
document
  .getElementById("accept-cookies")
  .addEventListener("click", acceptCookies);
document
  .getElementById("reject-cookies")
  .addEventListener("click", rejectCookies);
