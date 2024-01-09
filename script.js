
var counter =
  

$(".heart").click(function() {
    $(".heart").fadeOut();
    $(".header1").fadeOut();
    $(".cat").hide();
    $(".cat1").fadeIn();
    $(".form").fadeIn();
    $(".paw").show();

});
$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('.answer1').val();
    const answer2 = $('.answer2').val();

    
    if (answer2 === 'Crown' && answer1>= 5) {
      showResult("Crown Era Soobin");
      cacat2();
    } else if (answer2 === 'Blue' && answer1 >= 5) {
      showResult("Blue Hour Era Soobin");
      tacat2();
    } else if (answer2 === 'Crown' && answer1 < 5) {
      showResult("Run Away Era Soobin");
      orcat2();
    
    } else {
      showResult("CYSM Era Soobin");
      tucat2();
    }
      
    quizCount++;
    updateQuizCount();
  });
  function cacat2(){
      $(".cat1").hide();
      $(".tucat").hide();
      $(".tacat").hide();
      $(".orcat").hide();
      $(".cacat").show();
  }
   function tucat2(){
      $(".cat1").hide();
      $(".orcat").hide();
      $(".cacat").hide();
      $(".tacat").hide();
      $(".tucat").show();
      
  }
   function tacat2(){
      $(".cat1").hide();
      $(".tucat").hide();
      $(".cacat").hide();
      $(".orcat").hide();
      $(".tacat").show();
  }
   function orcat2(){
      $(".cat1").hide();
      $(".tucat").hide();
      $(".tacat").hide();
      $(".cacat").hide();
      $(".orcat").show();
  }
    
  function showResult(character) {
    const resultText = `Your character result is: ${character}.`;
    $('#result').empty().append(resultText);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});