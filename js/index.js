$(document).ready(function() {
  $("#sidenav").hide();
  
  // toggles dropdown menu on click
  $("#menu").on("click", function() {
    $("#sidenav").fadeToggle();  
  });
  
  // closes sidenav once link has been clicked
  $("a[href^='#']").on("click", function() {
    $("#sidenav").fadeOut();
  });
  
  // modal pop-up for each band
  $("#band-1").on("click", function() {
    $("#modal-1").modal({
      fadeDuration: 100
    });
  });

  $("#band-2").on("click", function() {
    $("#modal-2").modal({
      fadeDuration: 100
    });
  });

  $("#band-3").on("click", function() {
    $("#modal-3").modal({
      fadeDuration: 100
    });
  });

  $("#band-4").on("click", function() {
    $("#modal-4").modal({
      fadeDuration: 100
    });
  });

  $("#band-5").on("click", function() {
    $("#modal-5").modal({
      fadeDuration: 100
    });
  });

  $("#band-6").on("click", function() {
    $("#modal-6").modal({
      fadeDuration: 100
    });
  });

  $("#band-7").on("click", function() {
    $("#modal-7").modal({
      fadeDuration: 100
    });
  });

  $("#band-8").on("click", function() {
    $("#modal-8").modal({
      fadeDuration: 100
    });
  });

  // modal pop-up for each soloist roster 
  $("#vocals").on("click", function() {
    $("#modal-1").modal({
      fadeDuration: 100
    });
  });

  $("#guitar").on("click", function() {
    $("#modal-2").modal({
      fadeDuration: 100
    });
  });

  $("#bass").on("click", function() {
    $("#modal-3").modal({
      fadeDuration: 100
    });
  });

  $("#drums").on("click", function() {
    $("#modal-4").modal({
      fadeDuration: 100
    });
  });

  $("#keys").on("click", function() {
    $("#modal-5").modal({
      fadeDuration: 100
    });
  });

  $("#misc").on("click", function() {
    $("#modal-6").modal({
      fadeDuration: 100
    });
  });

  $("#producer").on("click", function() {
    $("#modal-7").modal({
      fadeDuration: 100
    });
	});
  
  // opens & closes more-info on click of roster member (soloists)
  $(".more-info").hide();
  $("li").on("click", function() {
    $(this).find(".more-info").toggle(function () {
      $(this).css("background", "#F4A9B9");
      $("p").css("fontSize", "0.95em");
    });
  });

  // keeps pink highlight for list items under soloist rosters while dropdown is open & removes highlight when closed
  $("li").on("click", function () {
    $(this).not(".band-members > li").toggleClass("pink-highlight");
  });

  // countdown timer for upcoming event 
  // date we're counting down to
  var countDownDate = new Date("May 4, 2018 19:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    $("#days").text(days + "d");
    $("#hours").text(hours + "h");
    $("#minutes").text(minutes + "m");
    $("#seconds").text(seconds + "s");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $("#countdown").text("Event is over");
    }
  }, 1000);
  
});				