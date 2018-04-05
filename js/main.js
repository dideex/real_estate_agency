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


  ////////////////////////////////////
  // input[type = range]
  ////////////////////////////////////
  const formatter = new Intl.NumberFormat("ru");
  $("#budget-input").on('change', e => $("#budget").html(formatter.format($(e.target).val())) )
  $("#count-input").on('change', e => $("#count").html($(e.target).val()) )
  
  ////////////////////////////////////
  // Masked input +7(___)_____-____-____
  ////////////////////////////////////

  $("#advice-phone").mask("+7(999)999-99-99");
  $("#hypothec-phone").mask("+7(999)999-99-99");
  $("#instruction-phone").mask("+7(999)999-99-99");

});

////////////////////////////////////
// Google maps
////////////////////////////////////

function initMap() {
  var startPos = { lat: 54.720813, lng: 55.960871 };
  var uluru = { lat: 54.720813, lng: 55.960871 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: startPos,
    disableDefaultUI: true,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}