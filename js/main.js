$(document).ready(function(){
  ////////////////////////////////////
  // OWL CAROUSEL
  ////////////////////////////////////
  var owlStaff = $("#slider-staff").owlCarousel({
    loop: true,
    margin: 10, 
    nav: false,
    items: 3,
    dots: false
  });

  $("#next-staff").click(function() {
    return owlStaff.trigger("next.owl.carousel");
  });
  $("#prev-staff").click(function() {
    return owlStaff.trigger("prev.owl.carousel");
  });

  
  var owlComments = $("#slider-comments").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    dots: false
  });

  $("#next-comments").click(function() {
    return owlComments.trigger("next.owl.carousel");
  });
  $("#prev-comments").click(function() {
    return owlComments.trigger("prev.owl.carousel");
  });
});