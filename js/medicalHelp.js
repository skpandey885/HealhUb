// js for nav bar 
$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(window).width() > 992) {
      $(".navbar").addClass("nav-sticky");
    } else if ($(window).width() < 992) {
      $(".navbar").addClass("nav-sticky");
    } else $(".navbar").removeClass("nav-sticky");
  });

// js for bottom to top button
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  //js for the card state management

  var cards = document.getElementsByClassName("card");
  for(let i = 0; i < cards.length; i++) {
    var categories = cards[i].getElementsByClassName("category");
      for(let j = 0; j < categories.length; j++){
        categories[j].addEventListener("click", () => {
          console.log(`clicked category ${categories[j].innerHTML} of card ${i+1}`)
          cards[i].getElementsByClassName("category-active")[0].classList.remove("category-active");
          cards[i].getElementsByClassName("category")[j].classList.add("category-active");
          console.log(`added active category class to ${categories[j].innerHTML} of card ${i+1}`);
          if (screen.width >= 1000){
            cards[i].getElementsByClassName("indicator")[0].style.left = `${60 + j * (220)}px`;
          }
          else{
            cards[i].getElementsByClassName("indicator")[0].style.left = `${20 + j * (84)}px`
          }
          cards[i].getElementsByClassName("active")[0].classList.remove("active");
          cards[i].getElementsByClassName("infotext")[j].classList.add("active");
        })
      }
  };
  


  