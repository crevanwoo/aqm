
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
    dots: false,
    //dots: true,
    // appendDots: $('.screen_slider'),
    //dotsClass: 'screen_slider_points',
    //centerMode: true,
    focusOnSelect: true,
    arrows: false,
    //draggable: false,
});


// Gallery Tabs
$('.gallery [data-tab]').css('opacity', '0');
$('.gallery [data-tab]').css('visibility', 'hidden');

$('.gallery [data-tab="tab_1"]').css('opacity', '1');
$('.gallery [data-tab="tab_1"]').css('visibility', 'visible');


var gallery_tab = 0;
var gallery_wheel_marker = true;
$('body').on('mousewheel', function (e) {
    e.preventDefault();
    console.log(e.originalEvent.deltaY);
    if ($('.gallery').length > 0) {

        if (e.originalEvent.deltaY > 0 && gallery_tab < ($('.screen_slider_points li').length - 1) && gallery_wheel_marker) {
            gallery_wheel_marker = false;

            hideElem('.gallery [data-tab="tab_' + (gallery_tab + 1) + '"]');

            gallery_tab++;
            
            showElem('.gallery [data-tab="tab_' + (gallery_tab + 1) + '"]');
            $('.screen_slider_points .active_screen').css('top', (45 * gallery_tab) + 5 + 'px');
            setTimeout(function () {
                gallery_wheel_marker = true;
            }, 300)


        } else if (e.originalEvent.deltaY < 0 && gallery_tab > 0 && gallery_wheel_marker) {
            gallery_wheel_marker = false;
                 hideElem('.gallery [data-tab="tab_' + (gallery_tab + 1) + '"]');
            gallery_tab--;
             showElem('.gallery [data-tab="tab_' + (gallery_tab + 1) + '"]');
            $('.screen_slider_points .active_screen').css('top', (45 * gallery_tab) + 5 + 'px');
            setTimeout(function () {
                gallery_wheel_marker = true;
            }, 300)

        }
    }


})


function hideElem(selector) {
    $(selector).animate({
        opacity: 0
    }, function () {
        $(selector).css('visibility', 'hidden');
    })
}

$('.gallery .slide').css('height',$('.gallery .slide').height() );

function showElem(selector) {
    $(selector).css('visibility', 'visible');
    setTimeout(function () {
        $(selector).animate({
            opacity: 1
        });
        
    }, 100);
    
}