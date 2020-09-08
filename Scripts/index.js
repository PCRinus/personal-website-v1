$(document).ready(function () {
  var moreButtons = document.getElementsByClassName("show-more-button");
  var moreText = document.getElementsByClassName("show-more-text");
  var mobileNavLinks = document.getElementsByClassName("nav-mobile-link")

  for (let i = 0; i < moreButtons.length; i++) {
    $(moreButtons[i]).click(function() {
      $(moreText[i]).slideToggle(200);
    })
  }

  for(let i=0; i<=mobileNavLinks.length; i++) {
    $(mobileNavLinks[i]).click(function () {
      $(mobileNavLinks).removeClass("nav-mobile-active")
      $(mobileNavLinks[i]).addClass("nav-mobile-active")
    })
  }
})