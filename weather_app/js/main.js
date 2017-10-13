// Creating global variables.
var omaha = 70;
var lincoln = 60;

$(document).ready(function () {
  // Change value of temperature to match city.
  $(".form-control").change(function (event) {
    var selectedCity = $('.form-control').val();

    if (selectedCity == "omaha") {
      // Show Omaha temperature
      $("#temperature").html(omaha);

    } else if (selectedCity == "lincoln") {
      // Show lincoln temperature
      $("#temperature").text(lincoln);
    }









    // Figure out if omaha or lincoln is selected.
    $("#temperature").html()
    console.log(event.target.value);
    // 
    // Show the temperature value that matches the selected city
  });
});
