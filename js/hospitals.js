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

var map;

function initMap() {
  // Create the map.
  var pyrmont = {
    lat: 23.8701334,
    lng: 90.2713944,
  };
  if (navigator.geolocation) {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pyrmont = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    } catch (err) {}
  }
  map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 17,
  });

  // Create the places service.
  var service = new google.maps.places.PlacesService(map);

  // Perform a nearby search.
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 4000,
      type: ["hospital"],
    },
    function (results, status, pagination) {
      if (status !== "OK") return;

      createMarkers(results);
      getNextPage =
        pagination.hasNextPage &&
        function () {
          pagination.nextPage();
        };
    }
  );
}

const mc = require("@google/maps").createClient({
  key: "AIzaSyBxJSyDiNKrSjxXNAVX2UEk1cAWb9KB_tc",
});

const location = [-33.878101, 151.220386]; // Darlinghurst, AU
const r = 1000;
const request = {
  location: location,
  radius: r,
  type: "hospital",
  keyword: "hospital",
};

mc.placesNearby(request, function (err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(res.json.results.length));
  console.log(
    JSON.stringify(
      res.json.results.map(function (v) {
        return v.name;
      })
    )
  );
});
