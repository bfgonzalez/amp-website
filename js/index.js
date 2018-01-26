$(document).ready(function() {
  $("#sidenav").hide();
  
  // scroll effect
  $("a[href^='#']").on("click", function() {
    var the_id = $(this).attr("href");
  
      $("html, body").animate({
        scrollTop:$(the_id).offset().top
      }, "slow");

    return false;});
  
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
      fadeDuration: 200
    });
  });

  $("#band-2").on("click", function() {
    $("#modal-2").modal({
      fadeDuration: 200
    });
  });

  $("#band-3").on("click", function() {
    $("#modal-3").modal({
      fadeDuration: 200
    });
  });

  $("#band-4").on("click", function() {
    $("#modal-4").modal({
      fadeDuration: 200
    });
  });

  $("#band-5").on("click", function() {
    $("#modal-5").modal({
      fadeDuration: 200
    });
  });

  $("#band-6").on("click", function() {
    $("#modal-6").modal({
      fadeDuration: 200
    });
  });

  $("#band-7").on("click", function() {
    $("#modal-7").modal({
      fadeDuration: 200
    });
  });

  $("#band-8").on("click", function() {
    $("#modal-8").modal({
      fadeDuration: 200
    });
  });

});