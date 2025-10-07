'use strict';
{
    $(function(){
        $('.icon__menu').on('click', function(){
            $('.nav').toggleClass('active');
        })

        // slick
        $('.slider').slick({
            slidesToShow: 1,
            arrows: true,
            dots: true
        });
    
    });

    $('.nav__close').on('click', function(){
        $('.nav').removeClass('active');
    });
}