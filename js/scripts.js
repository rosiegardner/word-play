$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
    event.preventDefault();
    let sentence1 = $("input#sentence1").val();
    let result = sentence1.split(" ");
    let array = []
    


    result.forEach(function(word) {
      if (result.length >= 3) {
        array.push(word);
        return array.reverse().join(" ");
      } 
       else {
        array = result.join(" ");
      }
    });
  

    $(".sentence1").text(array);

    

    $("#playResult").show();
  });
});