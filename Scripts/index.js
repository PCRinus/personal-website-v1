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

  var heroHeight = $("#slideIntroducere").height();
  $(window).scroll(function() {
    var amountScrolled = $(window).scrollTop()
    var heroHeightCorrected = heroHeight / 3
    console.log(heroHeightCorrected)
    if(amountScrolled > heroHeightCorrected)
    {
      $(".nav-desktop").addClass("nav-desktop-scrolled")
      $(".nav-desktop-link").addClass("nav-desktop-link-scrolled")
    }
    else{
      $(".nav-desktop").removeClass("nav-desktop-scrolled")
      $(".nav-desktop-link").removeClass("nav-desktop-link-scrolled")
    }
  })

})