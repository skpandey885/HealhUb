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

// Calorie calculator
jQuery(function ($) {
    $("#submit").click(function () {
        gender = $("#gender").val();
        age = parseInt($("#age").val());
        height = parseInt($("#height").val());
        weight = parseInt($("#weight").val());
        activity = parseFloat($("#cactivity").val());
        result = $("#result");

        // console.log(gender, age, height, weight, activity);

        if (age === "" || gender === "" || height === "" || weight === "" || activity === "")
            alert("All fields are required. Please fill and try again!");

        output = Infinity;

        switch (gender) {
            case "male":
                msjBMR = 10 * weight + 6.25 * height - 5 * age + 5;
                rhbBMR = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
                break;
            case "female":
                msjBMR = 10 * weight + 6.25 * height - 5 * age - 161;
                rhbBMR = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
                break;
            default: break;
        }

        BMR = (msjBMR + rhbBMR) / 2;
        output = BMR * activity;

        if (isNaN(output))
            alert("All fields are required. Please fill and try again!");
        else if (output <= 0)
            alert("Please fill correct values");
        else
            result.text(`To maintain weight ensure an intake of ${output.toFixed(2)} calories/day`);
    });
});