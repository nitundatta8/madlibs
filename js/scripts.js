$(document).ready(function(){
  $("#blanks form").submit(function(event){
    event.preventDefault();
    var blanks = ["person1","person2","animal","exclamation","verb","noun"];
    blanks.forEach(function(blank){
      var userInput = $("#" + blank).val();
      console.log(userInput);
      $("."+blank).text(userInput);
      $("#story").show();
    });
  });
});


