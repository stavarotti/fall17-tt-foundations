// Creating global variables.
var omaha = 70;
var lincoln = 60;

var omaha_woeid = 2465512;
var lincoln_woeid = 2439482;

var omaha_url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202465512&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

var lincoln_url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202439482&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

var dog_breeds_url = "https://dog.ceo/api/breeds/list/all";

$(document).ready(function () {
  // Change value of temperature to match city.
  $(".form-control").change(function (event) {
    var selectedCity = $('.form-control').val();

    function fetchAllDogs() {

    }

    function getWeather(url) {
      // Get the woeid - done
      // disable the select element
      $(".form-control").attr("disabled", "disabled");

      // fetch the weather data
      $.getJSON(url, {}, function (data) {
        // Show the weather data in the console
        console.log(data);

        // Get the current temperature value
        var currentTemperature = data.query.results.channel.item.condition.temp;

        var currentDescription = data.query.results.channel.item.condition.text;

        // update the temperature
        $("#temperature").text(currentTemperature);
        $("#description").text(currentDescription);

        // enable the select element
        $(".form-control").removeAttr("disabled");
      });
    }

    if (selectedCity == "omaha") {
      getWeather(omaha_url);
    } else if (selectedCity == "lincoln") {
      getWeather(lincoln_url);
    }









    // Figure out if omaha or lincoln is selected.
    $("#temperature").html()
    console.log(event.target.value);
    // 
    // Show the temperature value that matches the selected city
  });
});
