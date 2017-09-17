$(document).ready(function() {
  $(".box1").fadeOut(3000);
  $(".box1").fadeIn(3000);

  $(".box2").slideUp(2000);
  $(".box2").slideDown(2000);

  $(".box3").click(function() {
    $(".box3").animate({
      width: 800,
      opacity: 0.8
    }, 1000);

  $("p").hide(3000, function() {
    $(".animate1").show(3000);

      $(".hideShow").hide();
  	  $(".hideShow").show();
	});
  });
});