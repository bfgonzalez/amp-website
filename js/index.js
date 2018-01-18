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
  
  $("a[href^='#']").on("click", function() {
    $("#sidenav").fadeOut();
  });

});