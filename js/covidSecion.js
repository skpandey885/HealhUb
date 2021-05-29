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

  let covidTable = document.getElementById('covidTable');
let man = 'i amd man'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://corona.lmao.ninja/v2/countries/USA,India,Brazil,France,Turkey?yesterday", requestOptions)
    .then(response => response.json())
    .then(result => {
        covidTable.innerHTML=`<table class="table table-bordered table-hover">
<thead class="thead-dark">
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Country</th>
        <th scope="col">Total Cases</th>
        <th scope="col">New Cases</th>
        <th scope="col">Total Deaths</th>
        <th scope="col">New Deaths</th>
        <th scope="col">Total Active Cases</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>${result[0].country}</td>
        <td>${result[0].cases}</td>
        <td class="newCases" >${result[0].todayCases}</td>
        <td>${result[0].deaths}</td>
        <td class="newDeaths" >${result[0].todayDeaths}</td>
        <td>${result[0].active}</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>${result[1].country}</td>
        <td>${result[1].cases}</td>
        <td class="newCases" >${result[1].todayCases}</td>
        <td>${result[1].deaths}</td>
        <td class="newDeaths" >${result[1].todayDeaths}</td>
        <td>${result[1].active}</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>${result[2].country}</td>
        <td>${result[2].cases}</td>
        <td class="newCases" >${result[2].todayCases}</td>
        <td>${result[2].deaths}</td>
        <td class="newDeaths" >${result[2].todayDeaths}</td>
        <td>${result[2].active}</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>${result[3].country}</td>
        <td>${result[3].cases}</td>
        <td class="newCases" >${result[3].todayCases}</td>
        <td>${result[3].deaths}</td>
        <td class="newDeaths" >${result[3].todayDeaths}</td>
        <td>${result[3].active}</td>
    </tr>
    <tr>
        <th scope="row">5</th>
        <td>${result[4].country}</td>
        <td>${result[4].cases}</td>
        <td class="newCases" >${result[4].todayCases}</td>
        <td>${result[4].deaths}</td>
        <td class="newDeaths" >${result[4].todayDeaths}</td>
        <td>${result[4].active}</td>
    </tr>
</tbody>
</table>
`


    })
    .catch(error => console.log('error', error));

