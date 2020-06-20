/*=========================

        Navigation
        
==========================*/

$(document).ready(function(){
	flag=0;
	whiteNav = function(){
		//show white nav
	    $("nav").addClass("white-nav-top");
	    
	    //changeing Brand and catagories
	    $(".navbar-brand").css({
	        "color": "#000"
	    });
	    $(".dropdown-menu").css("background-color","#fff");
	    
	    // toggle-btn
	    $(".navbar-toggler").addClass("white-custom-toggler");
	    $(".navbar-toggler").removeClass("custom-toggler");
	}

	defaultNav = function(){
		//hide white nav
	    $("nav").removeClass("white-nav-top");
	    
	    ///changeing Brand and catagories
	    $(".navbar-brand").css("color","#fff");
	    $(".dropdown-menu").css("background-color","#000");

	    // toggle-btn
	    $(".navbar-toggler").removeClass("white-custom-toggler");
	    $(".navbar-toggler").addClass("custom-toggler");
	}
	showHideNav = function(){
		if($(window).scrollTop() > 50)
        	whiteNav();
        else{
        	if(flag!=1)
    			defaultNav();
        }
    }

   //show or hide navigation on page load
    showHideNav();
    
    $(window).scroll(function(){
        //show/hide nav on scroll
        showHideNav();

    });
    function handler1() {
	    flag=1;
	    whiteNav();
	    $(this).one("click", handler2);
	}
	function handler2() {
		flag=0;
		if($(window).scrollTop() < 50)
			defaultNav();
	    $(this).one("click", handler1);
	}
	$(".custom-toggler").one("click", handler1);
    
});