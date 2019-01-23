$(document).ready(function(){
  $("form#countForm").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
  if (!countTo || !countBy || countBy<1 || countTo<countBy) {
    alert("Please fill in all fields correctly");
  }
  else {
  for (var i = countBy; i <= countTo; i += countBy) {
      var array = [i];
      $("#result").append("<p>" + array + "<br>");
    }};
  });
});
