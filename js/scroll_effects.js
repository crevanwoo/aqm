$('.index h1.animated, .index button.animated ').viewportChecker({
    classToAdd: 'fadeInUp'
});

$('.index .variants ul').viewportChecker({
    classToAdd: '',

    callbackFunction: function () {
        $('.index .variants ul li.animated').css('opacity', '0');
        var delay = 100;
        var count = 0;
        addClassToLi();

        function addClassToLi() {
            console.log('asd');
            if (count < 6) {
                setTimeout(function () {
                    console.log('asd');
                    $('.index .variants ul li.animated:eq(' + count + ')').addClass('fadeIn');
                    count++;
                    addClassToLi();

                }, delay += 100)
            }
        }
    }
});


$('.about_wrapper .animated').viewportChecker({
    classToAdd: 'fadeInUp'
});

$('.services_wrapper h1.animated').viewportChecker({
    classToAdd: 'fadeIn',

});
$('.services_wrapper .animated').viewportChecker({
    classToAdd: 'fadeInUp'
});




/*Before after*/

$(".slider .slide_view ").twentytwenty({
    default_offset_pct: 0.25
    
});


/*Slider */

$('.gallery_wrapper .slider .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery_wrapper .slider .previews',
    draggable: false,
});
$('.gallery_wrapper .slider .previews').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.gallery_wrapper .slider .slide',
    dots: true,
    appendDots: $('.screen_slider'),
    dotsClass: 'screen_slider_points',
    //centerMode: true,
    focusOnSelect: true,
    arrows: false,
    //draggable: false,
});
