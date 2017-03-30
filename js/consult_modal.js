$(document).ready(function () {
    
   /* $('.consult_modal').empty();
    $('.consult_modal').append('<div class="modal_wrapper"><div class="white_field"></div><div class="figure10"></div><form action="#"><div class="consult_text"><h1>Закажите консультацию</h1><p>Для получения кунсультации<br> и обсуждения проекта</p> </div><div class="consult_fields"><div class="input"><input type="text"  placeholder="Ваше имя" required></div><div class="input"><input type="text" title="Допустимы только цифры" placeholder="Телефон" required pattern="[0-9]{5,14}"></div><input type="submit" value="Оставить заявку"></div></form><div class="close_modal"></div></div>')*/
    
    
    
    
    var show_modal = $('.phone_text, .gallery .screen_slider .slide_description button, .index button');
    var modal = $('.consult_modal');
    var close_modal = $('.close_modal');
    $(modal).css('opacity', '0');
    $(modal).css('transform', 'scale(0.1)');
    $(modal).css('transition', '0.4s');

    $(show_modal).click(function () {
        $(modal).removeClass('hide');
        setTimeout(function () {
            $(modal).animate({
                opacity: 1,

            })
            $(modal).css('transform', 'scale(1)');
        }, 100)
    })
    $(close_modal).click(function () {

        $(modal).animate({
            opacity: 0
        }, function () {
            $(modal).addClass('hide');
            $(modal).css('transform', 'scale(0.1)');
        })
    });
    
    
});
