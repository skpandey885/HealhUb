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

// js for the table
var wtcases = $("#w-cases");
var wtrec = $("#w-recovered");
var wtdths = $("#w-deaths");
var wtperc = $("#w-perc");
var ctcases = $("#c-cases");
var ctrec = $("#c-recovered");
var ctdths = $("#c-deaths");
var ctperc = $("#c-perc");
// function worldGet() {
//   var url = '"https://api.covid19api.com/summary';
//   $.get(url, function (worldData) {
//     wtcases.innerHTML("5");
//   });
// }
// worldGet();
axios.get("https://api.covid19api.com/summary").then(function (response) {
  console.log(response.data.Countries[0].Country);
  perc =
    (response.data.Global.TotalRecovered /
      response.data.Global.TotalConfirmed) *
    100;
  wtcases.html(response.data.Global.TotalConfirmed);
  wtrec.html(response.data.Global.TotalRecovered);
  wtdths.html(response.data.Global.TotalDeaths);
  wtperc.html(perc);
});

var url = "https://api.covid19api.com/summary";
axios.get(url).then(function (response) {
  for (var n = 0; n < response.data.Countries.length; n++) {
    $("#selectCountry").append(
      "<option>" + response.data.Countries[n].Country + "</option>"
    );
  }
});

function showData() {
  axios.get("https://api.covid19api.com/summary").then(function (response) {
    for (var c = 0; c < response.data.Countries.length; c++) {
      var selected = $("#selectCountry").find("option:selected").text();

      if (response.data.Countries[c].Country == selected) {
        console.log("yayy");
        perc =
          (response.data.Countries[c].TotalRecovered /
            response.data.Countries[c].TotalConfirmed) *
          100;
        ctcases.html(response.data.Countries[c].TotalConfirmed);
        ctrec.html(response.data.Countries[c].TotalRecovered);
        ctdths.html(response.data.Countries[c].TotalDeaths);
        ctperc.html(perc);
        break;
      }
    }
  });
}
showData();

var darkswitch=document.getElementById("icon");

if(localStorage.getItem("theme")==null)
{
  localStorage.setItem("theme","light");
}

let localData=localStorage.getItem("theme");
if(localData=="light")
{
  darkswitch.src="../assets/darkmoon.png";
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