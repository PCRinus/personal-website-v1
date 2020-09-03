var moreButtons = document.getElementsByClassName("show-more-button");
var moreText = document.getElementsByClassName("show-more-text");

for (let i = 0; i < moreButtons.length; i++) {
  moreButtons[i].addEventListener("click", function () {
    if (moreButtons[i].innerHTML === "Mai mult") {
      moreButtons[i].innerHTML = "Mai putin";
      moreText[i].classList.remove("invisible-text");
      moreText[i].classList.add("visible-text");
    } else {
      moreButtons[i].innerHTML = "Mai mult";
      moreText[i].classList.remove("visible-text");
      moreText[i].classList.add("invisible-text");
    }
  });
}

var myNav = document.getElementById("myNav");
var viewportHeight = document.documentElement.clientHeight;
var navbarHeight = myNav.offsetHeight;
var calculatedHeight = viewportHeight - navbarHeight;

window.onscroll = function () {
  if (window.pageYOffset > calculatedHeight) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
