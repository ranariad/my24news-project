
$(document).ready(function(){
  $("#slider1").owlCarousel({
	   margin:30,
	  items:4,
	  nav:true,
	  dots:false,
	
	  
  });
	
	
        $('#slider2').owlCarousel({
            loop: false,
            margin: 30,
            dots: false,
            nav: true,
            
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
	
	$('#slider3').owlCarousel({
            loop: false,
            margin: 30,
            dots: false,
            nav: true,
            
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
});


