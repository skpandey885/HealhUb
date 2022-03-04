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

var lat = 0;
var lon = 0;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    var requestOptions = {
      method: "GET",
    };
    var point1 = (lon - 0.02).toString().substring(0, 10);
    var point2 = (lat + 0.02).toString().substring(0, 10);
    var point3 = (lon + 0.02).toString().substring(0, 10);
    var point4 = (lat - 0.02).toString().substring(0, 10);
    console.log(point1, point2, point3, point4);
    fetch(
      "https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=rect:" +
        point1 +
        "," +
        point2 +
        "," +
        point3 +
        "," +
        point4 +
        "&limit=20&apiKey=3de51dc2d59d4ff0adf8a2d2b8fff070",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        var map = L.mapquest.map("map", {
          center: [lat, lon],
          layers: L.mapquest.tileLayer("map"),
          zoom: 14,
        });
        L.mapquest
          .textMarker([lat, lon], {
            type: "marker",
            icon: {
              primaryColor: "#FF0000",
              secondaryColor: "#333333",
              size: "lg",
            },
          })
          .bindPopup("You")
          .addTo(map);
        console.log(result);
        for (var i = 0; i < result.features.length; i++) {
          L.mapquest
            .textMarker(
              [
                result.features[i].geometry.coordinates[1]
                  .toFixed(7)
                  .toString(),
                result.features[i].geometry.coordinates[0]
                  .toFixed(7)
                  .toString(),
              ],
              {
                type: "marker",
                icon: {
                  primaryColor: "#333333",
                  secondaryColor: "#333333",
                  size: "sm",
                },
              }
            )
            .bindPopup(result.features[i].properties.address_line1)
            .addTo(map);
        }
      })
      .catch((error) => console.log("error", error));

    L.mapquest.key = "jLSFuiva5A1AyFqzlknYnBT5OqKV83g5";
  });
} else {
  console.log("Browser doesn't support geolocation!");
}
