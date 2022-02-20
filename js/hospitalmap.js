
const APIkey = "API_KEY_HERE";   //Generate an API key from Google Maps Service and replace "API_KEY_HERE" 

function fetchUrl(){
  var url = `https://maps.googleapis.com/maps/api/js?key=${APIkey}&callback=initMap&libraries=places&v=weekly`;
  return url;
}

var embed = document.getElementById("embedwrapper");


var script = document.createElement('script');
script.src = fetchUrl();
embed.appendChild(script);


function initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const myLoc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLoc,


        })   
        var request = {
          location: myLoc,
          radius: 1000,
          types: ['hospital', 'health']
        };
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (res, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK){
            for (var i = 0; i < res.length; i++) {
              var placeLoc = res[i].geometry.location;
              var marker = new google.maps.Marker({
                map: map,
                position: placeLoc
              })
            }

          }
        }
        )
    }
      )}

    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  


    
    


