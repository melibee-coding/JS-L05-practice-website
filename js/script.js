var title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});


// ----- Darkmode and light mode toggled on/off with one button ----- //

var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});

/* ----- Dark mode and light mode applied with two buttons -----

var darkModeButton = document.querySelector(".dark-mode");
var body = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  body.classList.add("dark-palette");
});

var lightModeButton = document.querySelector(".light-mode");

lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
*/

