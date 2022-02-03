$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

$(document).ready(function(){
    $('.accordion-item').click(function(){
        if($(this).hasClass('open')) {
            $(this).removeClass('open');   
            $(this).find('.accordion-content').slideUp();
        } else {
            $(this).addClass('open');   
            $(this).find('.accordion-content').slideDown();
        }
           
    });
});