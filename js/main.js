 AOS.init({
 	duration: 500,
 	easing: 'slide',
 	once: false
 });



jQuery(document).ready(function($) {

	"use strict";

	
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

	// 	$('body').on('click', '.js-menu-toggle', function(e) {
	// 		var $this = $(this);
	// 		e.preventDefault();

	// 		if ( $('body').hasClass('offcanvas-menu') ) {
	// 			$('body').removeClass('offcanvas-menu');
	// 			$this.removeClass('active');
	// 		} else {
	// 			$('body').addClass('offcanvas-menu');
	// 			$this.addClass('active');
	// 		}
	// 	}) 

	 	// click outisde offcanvas
	 	$(document).mouseup(function(e) {
	     var container = $(".site-mobile-menu");
	     if (!container.is(e.target) && container.has(e.target).length === 0) {
	       if ( $('body').hasClass('offcanvas-menu') ) {
	 				$('body').removeClass('offcanvas-menu');
	 			}
	     }
	 	});
	 }; 
	siteMenuClone();


	
	


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 20,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});

			if ( $('.nonloop-block-14').length > 0 ) {
				$('.nonloop-block-14').owlCarousel({
			    center: false,
			    items: 1,
			    loop: true,
					stagePadding: 0,
			    margin: 20,
			    smartSpeed: 1000,
			    autoplay: true,
			    nav: true,
			    responsive:{
		        600:{
		        	margin: 20,
		        	nav: true,
		          items: 2
		        },
		        1000:{
		        	margin: 20,
		        	stagePadding: 0,
		        	nav: true,
		          items: 3
		        }
			    }
				});
			}

		 	$('.custom-next').click(function(e) {
		 		e.preventDefault();
		 		$('.nonloop-block-13').trigger('next.owl.carousel');
		 	})
		 	$('.custom-prev').click(function(e) {
		 		e.preventDefault();
		 		$('.nonloop-block-13').trigger('prev.owl.carousel');
		 	})
	}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	


	

	

	
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');

   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 50
      }, 600, 'easeInOutExpo', function() {
        // window.location.hash = hash;

      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };

  siteScroll();

  // Stellar
  $(window).stellar({
  	horizontalScrolling: false,
    responsive: true,
  });






});



 
 
  $(document).ready(function(){
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if(scroll>90){
            $(".text-right").css("background","#91b029");
          }
          else{
                $(".text-right").css("background","transparent");
              }
            })
      });

  $('.text-right').ready(function(){
    $('text-right').animate({scrollTop:0}, 'slow');
});







 