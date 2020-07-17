$(".stages-box").click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.stages-number[data-tab="'+ id +'"]');

    $('.stages-box.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.stages-number.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// animate btn effect
$('.btn').addClass('autoflash').append('<div class="flash lighting" style="height: 100%;width: 40px;top: 0px;left: -140px;"></div>');
// animate btn effect end

// mask phone
$("[name='phone']").mask("+7(999) 999-9999");

// slider
$('.project-slider__photo').slick({
    slidesToShow: 1,
    dots: true,
    asNavFor: '.project-slider__description',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
});

$('.project-slider__description').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.project-slider__photo'
});
// slider end



// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
                $('.form-quiz__content').slick({
                    slidesToShow: 1,
                    asNavFor: '.dialog-manager__wrapper',
                    fade: true,
                    nextArrow: '<button type="button" class="slick-next">Далее<img src="img/arrow.svg" alt="" class="icon"></button>',
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow2.svg" alt=""></button>',
                    appendArrows: '.button-group',
                    infinite: false,
                    // adaptiveHeight: true
                });

                $('.dialog-manager__wrapper').slick({
                    slidesToShow: 1,
                    arrows: false,
                    asNavFor: '.form-quiz__content',
                    fade: true,
                    infinite: false,
                });

            });


    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


$(".form-quiz__content").on("afterChange", function(event) {
    if($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.form-quiz').addClass('form-quiz-result');
    }
});

// mail
$("form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("form").trigger("reset");
    });
    return false;
});

// animate scroll
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});




// смена контента в модальном окне квиз
// $(document).ready(() => {
//     $('.btn-next').click(function () {
//         if (!$('.quiz-stages').last().hasClass('current')) $('.current').removeClass('current').next().addClass('current');
//         if (!$('.quote').last().hasClass('current')) $('.current').removeClass('current').next().addClass('current');
//         if ($('.quiz-stages__two').hasClass('current')) $('.btn-prev').css('display', 'flex');
//     });
//
//     $('.btn-prev').click(function () {
//         if (!$('.quiz-stages').first().hasClass('current')) $('.current').removeClass('current').prev().addClass('current');
//         if (!$('.quiz-stages').first().hasClass('current')) $('.current').removeClass('current').prev().addClass('current');
//         if ($('.quiz-stages__one').hasClass('current')) $('.btn-prev').css('display', 'none');
//     });
// });




