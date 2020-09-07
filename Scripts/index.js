$(document).ready(function () {
  var moreButtons = document.getElementsByClassName("show-more-button");
  var moreText = document.getElementsByClassName("show-more-text");

  for (let i = 0; i < moreButtons.length; i++) {
    $(moreButtons[i]).click(function() {
      $(moreText[i]).slideToggle(200);
    })
  }
})