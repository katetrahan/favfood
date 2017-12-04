$(document).ready(function() {
  $("form#food").submit(function(event) {
    event.preventDefault();
    var foodPreference = $("#meal").val();
    var bestFood = $("input#favfood").val();
    var secondFav=$("input:radio[name=operator]:checked").val();
    var foodarray= [foodPreference, bestFood, secondFav];

    $
    $(".foodresult").text(foodarray);

  });
});
