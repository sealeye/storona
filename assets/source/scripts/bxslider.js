//$(document).ready(function(){
//  $(".owl-carousel").owlCarousel();
//});

$('.owl-carousel-2').owlCarousel({
  loop: true,
  margin: 70,
  nav: true,
  items: 3,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

