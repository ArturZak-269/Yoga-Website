const darkTheme = document.getElementById("themeSwitch");
const body = document.body;
const line = document.querySelectorAll(".line");
const visitedLinkElements = document.querySelectorAll(".link:visited");
const unvisitedLinkElements = document.querySelectorAll(".link:link");
const moonButton = darkTheme.querySelector("img");

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

    // Update the button's image source for dark mode
    moonButton.src = "https://i.postimg.cc/5yqJc0JW/Light-Moon.png";
  } else {
    body.style.background = "white";
    body.style.color = "black";

    line.forEach((line) => {
      line.style.background = "black";
    });

    visitedLinkElements.forEach((visitedLinkElements) => {
      visitedLinkElements.style.color = "#63095b";
    });

    unvisitedLinkElements.forEach((unvisitedLinkElements) => {
      unvisitedLinkElements.style.color = "#26586f";
    });

    // Update the button's image source for light mode
    moonButton.src = "https://i.postimg.cc/tTcZ1Bn4/Dark-Moon.png";
  }
});
