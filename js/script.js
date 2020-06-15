/*=========================

        Navigation
        
==========================*/

$(function(){
   //show or hide navigation on page load
    showHideNav();
    
    $(window).scroll(function(){
       
        //show/hide nav on scroll
        showHideNav();
    });
    function showHideNav(){
        if($(window).scrollTop() > 50){
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
        else{
            //hide white nav
            $("nav").removeClass("white-nav-top");
            
            ///changeing Brand and catagories
            $(".navbar-brand").css("color","#fff");
            $(".dropdown-menu").css("background-color","#000");

            // toggle-btn
            $(".navbar-toggler").removeClass("white-custom-toggler");
            $(".navbar-toggler").addClass("custom-toggler");
        }
    }
    
});