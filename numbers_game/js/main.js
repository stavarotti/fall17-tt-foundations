// Guesses the number to use.
function guess_number(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

// Computer generated number.
var number = guess_number(1, 100);

// Number of user guesses.
var guess_count = 0;

console.log("computer guess = " + number);

$(document).ready(function () {
  $("#range-form").submit(function (event) {
    var start_range = $("#start-range").val();
    var end_range = $("#end-range").val();

    if (start_range > 0 && end_range > start_range) {
      number = guess_number(start_range, end_range);
      guess_count = 0;

      console.log("new computer guess = " + number);
    }

    // Prevent default behavior
    event.preventDefault();
  });


  $("#guess-form").submit(function (event) {
    // Increment the number of guesses.
    guess_count++;

    // Update the guess count.
    $("#guess-count").html(guess_count);

    var user_guess = $("#user-number").val();

    console.log("user guess = " + user_guess);

    if (user_guess == number) {
      $("p").text("You are a winner!");
    } else {

      if (number % user_guess <= 5) {
        $("#hint").text("very close");
      } else if (number % user_guess <= 15) {
        $("#hint").text("close");
      } else {
        $("#hint").text("not even close...");
      }

      $("p").text("Try again");
    }

    // Prevent default behavior
    event.preventDefault();
  });
});
