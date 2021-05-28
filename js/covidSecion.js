// js for nav bar 

$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(window).width() > 992) {
      $(".navbar").addClass("nav-sticky");
    } else if ($(window).width() < 992) {
      $(".navbar").addClass("nav-sticky");
    } else $(".navbar").removeClass("nav-sticky");
  });
  