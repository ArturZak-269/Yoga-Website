let darkTheme = document.getElementById("themeSwitch");
let body = document.getElementById("body");
let line = document.querySelectorAll(".line");
let visitedLinkElements = document.querySelectorAll(".link:visited");
let unvisitedLinkElements = document.querySelectorAll(".link:link");

darkTheme.addEventListener("click", () => {
  darkTheme.classList.toggle("light");

  if (darkTheme.classList.contains("light") === false) {
    body.style.background = "#272020";
    body.style.color = "white";
    darkTheme.style.opacity = "1";

    line.forEach((line) => {
      line.style.background = "white";  
    });

    visitedLinkElements.forEach((visitedLinkElements) => {
      visitedLinkElements.style.color = "#63095b";
    });

    unvisitedLinkElements.forEach((unvisitedLinkElements) => {
      unvisitedLinkElements.style.color = "#4091BA";
    });
  } else {
    body.style.background = "white";
    body.style.color = "black";
    darkTheme.style.opacity = "1";

    line.forEach((line) => {
      line.style.background = "black";
    });

    visitedLinkElements.forEach((visitedLinkElements) => {
      visitedLinkElements.style.color = "#63095b";
    });

    unvisitedLinkElements.forEach((unvisitedLinkElements) => {
      unvisitedLinkElements.style.color = "#26586f";
    });
  }
});
