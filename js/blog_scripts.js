$('.blog_wrapper .slider').slick({
    dots: true,
    dotsClass: 'bullets',
    arrows: false,
    autoplay: true,

});



$('.blog_wrapper .sidebar_slider').slick({
    dots: true,
    dotsClass: 'bullets',
    arrows: false,
    autoplay: true,

});


$('.blog_wrapper .menu_inline li').on('mouseenter', function () {
    $('.opened_menu').removeClass('active');
    var current = $('.opened_menu[data-menu-tab=' + $(this).attr('data-menu-tab') + ']');
    current.addClass('active');
    current.find('.opened_menu__news__wrapper').removeClass('active');
    current.find('.opened_menu__news__wrapper[data-menu-inner-tab="0"]').addClass('active');


});

$('.bottom_menu').on('mouseleave', function () {

    $('.opened_menu').removeClass('active');


});

$('.blog_wrapper .opened_menu li[data-menu-inner-tab]').on('mouseenter', function () {
    $('.opened_menu__news__wrapper').removeClass('active');
    var current = $('.opened_menu__news__wrapper[data-menu-inner-tab=' + $(this).attr('data-menu-inner-tab') + ']');
    current.addClass('active');

});


$('.blog_wrapper .sidebar_news .switch button').on('click', function() {
    $('.blog_wrapper .sidebar_news [data-tab]').removeClass('active');
    $('.blog_wrapper .sidebar_news [data-tab=' + $(this).attr('data-tab') + ']').addClass('active');
    
})