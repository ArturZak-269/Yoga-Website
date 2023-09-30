// Pobierz elementy flag
const plFlag = document.getElementById("plFlag");
const enFlag = document.getElementById("enFlag");
const uaFlag = document.getElementById("uaFlag");

// Domyślny język to polski
let currentLanguage = "pl";

// Obiekty z tłumaczeniami dla różnych języków
const translations = {
  pl: {
    navAbout: "O MNIE",
    navGallery: "GALERIA",
    navContact: "KONTAKT",
    aboutMeHeader: "Kim jestem?",
    aboutMeSubheader: "twój ulubiony nauczyciel jogi",
    aboutMeText:
      "Mam bardzo dobry pomysł, jak widziałeś na naszej stronie, mamy wiele różnych stylów jogi. Zastanawiam się, czy chciałbyś wypróbować któryś z nich?",
  },
  en: {
    navAbout: "ABOUT ME",
    navGallery: "GALLERY",
    navContact: "CONTACT",
    aboutMeHeader: "Who am I?",
    aboutMeSubheader: "your favorite yoga teacher",
    aboutMeText:
      "I have a very good idea, as you've seen on our website, we have many different yoga styles. I wonder if you'd like to try any of them?",
  },
  ua: {
    navAbout: "ПРО МЕНЕ",
    navGallery: "ГАЛЕРЕЯ",
    navContact: "КОНТАКТ",
    aboutMeHeader: "Хто я?",
    aboutMeSubheader: "твій улюблений вчитель йоги",
    aboutMeText:
      "У мене є дуже гарна ідея, як ти бачив на нашому веб-сайті, у нас є багато різних стилів йоги. Цікаво, чи хотіли б ви спробувати один з них?",
  },
};

// Funkcja do tłumaczenia strony
function translatePage() {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  // Dodaj klasy do flag
  const flags = [plFlag, enFlag, uaFlag];
  flags.forEach((flag) => {
    if (flag.id === currentLanguage + "Flag") {
      flag.classList.add("active-flag");
      flag.classList.remove("grayed-out");
    } else {
      flag.classList.remove("active-flag");
      if (flag.id !== "plFlag") {
        flag.classList.add("grayed-out");
      }
    }
  });
}

// Obsługa kliknięć na flagi
plFlag.addEventListener("click", () => {
  currentLanguage = "pl";
  translatePage();
});

enFlag.addEventListener("click", () => {
  currentLanguage = "en";
  translatePage();
});

uaFlag.addEventListener("click", () => {
  currentLanguage = "ua";
  translatePage();
});

// Wywołaj funkcję do tłumaczenia strony przy starcie
translatePage();
