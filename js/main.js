$(function(){

	$(".owl-carousel").owlCarousel({
  	//loop:true,
  	items:1,
  	nav:true,
  	navText:["<img src=\"icons/Next-Icon.png\">","<img src=\"icons/Next-Icon.png\">"],
  	smartSpeed: 800,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  })
	
});
   

