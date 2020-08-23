$(document).ready(function(){
    //Sticky Nabbar
    $(window).scroll(function(){
        if($(window).scrollTop () > 220){
            $('.header_bottom').addClass('sticky');
        }else{
            $('.header_bottom').removeClass('sticky');
        }
    });

    //Show Ressponsive Toggle menu
        $(".responsive_bar").click(function(){
            $(".hb_menu").fadeToggle(1000);  
        });

    //owl Carousel for Leader Ssection
    $('.cls_carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });  

});
