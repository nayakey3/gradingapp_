$(function() {
  $("#getGrade").click( function() {
    var grade = $("#grade").val();
    // write the conditional to alert the letter grade
 if (grade >= 90) {
   alert("You got an A");
   
 }
 else if (grade >= 80) {
   alert("You got a B");
   
 }
     
 else if (grade >= 70) {
     alert("You got a C");
     
 }
 else if (grade >= 60) {
     alert("You got a D");
     
 }
 else if (grade >= 50) {
     alert("You got a F");
 }
  
      
      
  });
});