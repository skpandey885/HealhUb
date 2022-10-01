$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(window).width() > 992) {
      $(".navbar").addClass("nav-sticky");
    } else if ($(window).width() < 992) {
      $(".navbar").addClass("nav-sticky");
    } else $(".navbar").removeClass("nav-sticky");
  });


  
  window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
  };
  
  function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
        .querySelector("#height").value);
  
    /* Getting input from user into weight variable.
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
        .querySelector("#weight").value);

    /* Getting input  from user into age variable.
    Input is string so typecasting is necessary. */
    let age=parseInt(document
        .querySelector("#age").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
      result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight))
      result.innerHTML = "Provide a valid Weight!";

    else if(age==="" || isNaN(age))
      result.innerHTML = "Provide a valid Age!";
  
    // If both input is valid, calculate the bmi
    else {
  
      // Fixing upto 2 decimal places
      let bmi = (weight / ((height * height)
                / 10000)).toFixed(2);
  
      // Dividing as per the bmi conditions
      if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span>${bmi}</span>
        <p>
                <bold>Time to grab a bite!</bold>
                <br>
                By maintaining a healthy body weight, you lower your risk of developing serious health problems.
        </p>
`;
  
      else if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML =
          `Normal : <span>${bmi}</span>
           <p>
                <bold>Great Shape!</bold>
                <br>
                By maintaining a healthy body weight, you lower your risk of developing serious health problems.
           </p>
`;
  
      else result.innerHTML =
            `Over Weight : <span>${bmi}</span>
             <p>
                <bold>Time to run!</bold>
                <br>
                By maintaining a healthy body weight, you lower your risk of developing serious health problems.
            </p>`;
    }
  }

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