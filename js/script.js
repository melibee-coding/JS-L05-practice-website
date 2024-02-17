var title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

var darkModeButton = document.querySelector(".dark-mode");
var body = document.querySelector("body");

body.addEventListener("click", function () {
  body.classList.add("dark-palette");
});

var lightModeButton = document.querySelector(".light-mode");

lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
