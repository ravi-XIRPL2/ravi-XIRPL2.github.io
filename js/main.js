(function($) {
    "use strict";

    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 200){
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        
        }
    });
 


    new WOW().init();

    $('.main-navigation').onePageNav({
        currentClass: 'active'
    });
    $(window).on('load',function(){
        $('body').scrollspy({
            target: '.navcar-colapse',
            offset: 195
        });
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 200){
                $('.fixed-top').addClass('menu-bg');
        } else {
                $('.fixed-top').removeClass('menu-bg');       
        }
    });
});

    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parenttag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });



    $('.counter').counterUp({
        time:1000
    });



    $('#portfolio').mixItUp();



     var owl = $(".touch-slider");
     owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 2,
        itemsDekstop : [1119,2],
        itemsDekstopSmall: [1024,2],
        itemsTablet: [600,1],
        itemsMobile: [479,1]
     });

     $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
     $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-right"></i>');

     

     $(window).on('scroll',function(){
        if($(window).scrollTop() > 200){
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });



    var scrollAnimationTime = 1200,
    scrollAnimation = 'easeIn0utExpo';
    $('a.scrollto').on('bind','click.smoothscroll',function (event){
        event.preventDefault();
        var target = this.hash;
        $('html,body').stop().animate({
            'scrollTop': $(target).offset().top
    }, scrollAnimationTime,scrollAnimation,function(){
        window.location.hash = target;
    });
});



    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset){
            $('.back-to-top').fadeIn(400);
        }else{
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').on('click',function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })


    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });


    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });



    $('#loader').fadeOut();
}(jQuery));


