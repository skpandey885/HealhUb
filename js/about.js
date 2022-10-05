$(window).scroll(function () {
  if ($(this).scrollTop() > 0 && $(window).width() > 992) {
    $(".navbar").addClass("nav-sticky");
  } else if ($(window).width() < 992) {
    $(".navbar").addClass("nav-sticky");
  } else $(".navbar").removeClass("nav-sticky");
});

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

var tl = new TimelineMax({ onUpdate: updatePercentage1 });
const controller = new ScrollMagic.Controller();

tl.from("#lead", 1, { opacity: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: "#about",
  triggerHook: "onLeave",
  duration: "50%",
})
  .setPin("#about")
  .setTween(tl)
  .addTo(controller);

function updatePercentage1() {
  tl.progress();
}

var t2 = new TimelineMax({ onUpdate: updatePercentage2 });

t2.fromTo("#inner", 1, { x: "0vw" }, { x: "-300vw", ease: Linear.ease });

const scene1 = new ScrollMagic.Scene({
  triggerElement: "#intro",
  triggerHook: "onLeave",
  duration: "200%",
})
  .setPin("#intro")
  .setTween(t2)
  .addTo(controller);

function updatePercentage2() {
  t2.progress();
}

var t3 = new TimelineMax({ onUpdate: updatePercentage3 });

t3.from("#p-title", 1, { y: 100, opacity: 0 });
t3.from("#update", 1, { y: 100, opacity: 0 });
t3.from("#privacy", 1, { y: 100, opacity: 0 });

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#policy",
  triggerHook: "onLeave",
  duration: "50%",
})
  .setPin("#policy")
  .setTween(t3)
  .addTo(controller);

function updatePercentage3() {
  t3.progress();
}

var t4 = new TimelineMax({ onUpdate: updatePercentage3 });

t4.from("#t-title", 1, { y: 100, opacity: 0 });
t4.from("#t-tag", 1, { y: 100, opacity: 0 });
t4.from(".names", 1, { y: 100, opacity: 0 });
t4.from(".more-details", 1, { y: 100, opacity: 0 });

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#team",
  triggerHook: "onLeave",
  duration: "50%",
})
  .setPin("#team")
  .setTween(t4)
  .addTo(controller);

function updatePercentage3() {
  t4.progress();
}
var darkswitch=document.getElementById("icon");

if(localStorage.getItem("theme")==null)
{
  localStorage.setItem("theme","light");
}

let localData=localStorage.getItem("theme");
if(localData=="light")
{
  darkswitch.src="assets/darkmoon.png";
  document.body.classList.remove("dark-theme");
}
else if(localData=="dark")
{
  darkswitch.src="../assets/sun.png";
  document.body.classList.add("dark-theme");

}

darkswitch.onclick=function ()
{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    darkswitch.src="../assets/sun.png";
    localStorage.setItem("theme","dark");
  }
  else
  {
    darkswitch.src="../assets/darkmoon.png";
    localStorage.setItem("theme","light");
  }
}