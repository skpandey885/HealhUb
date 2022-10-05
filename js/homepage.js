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

var darkswitch=document.getElementById("icon");


darkswitch.onclick=function ()
{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    darkswitch.src="assets/sun.png";
    localStorage.setItem("theme","dark");
  }
  else
  {
    darkswitch.src="assets/darkmoon.png";
    localStorage.setItem("theme","light");
  }
}