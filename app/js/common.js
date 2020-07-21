$(".stages-box").click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.stages-number[data-tab="' + id + '"]');

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
                    nextArrow: '<button type="button" class="slick-next btn-next">Далее<img src="img/arrow.svg" alt="" class="icon"></button>',
                    prevArrow: '<button type="button" class="slick-prev btn-prev"><img src="img/arrow2.svg" alt=""></button>',
                    appendArrows: '.button-group',
                    infinite: false,
                    // adaptiveHeight: true
                    responsive: [
                        {
                            breakpoint: 830,
                            settings: {
                                adaptiveHeight: true
                            }
                        }
                    ]
                });

                $('.dialog-manager__wrapper').slick({
                    slidesToShow: 1,
                    arrows: false,
                    asNavFor: '.form-quiz__content',
                    fade: true,
                    infinite: false,
                });

                function setProgress(index) {
                    const calc = ((index) / ($slider.slick('getSlick').slideCount)) * 100;

                    $progressBar
                        .css('width', calc + '%')
                        .attr('aria-valuenow', calc);

                    $progressBarLabel.text(`${calc.toFixed()}%`);
                }

                const $slider = $('.form-quiz__content');
                const $progressBar = $('.progress-bg');
                const $progressBarLabel = $('.percent-val__footer');

                $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    setProgress(nextSlide);
                });


                setProgress(0);

            });

        // $('body, html').addClass('modal-open');


    });

    close.click(function () {
        $('.dialog-manager__wrapper').slick('unslick');
        $('.form-quiz__content').slick('unslick');
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

        // $('body, html').removeClass('modal-open');
    });
});
//end


$(".form-quiz__content").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.form-quiz').addClass('form-quiz-result');
        $('.btn-presents').hide();
    }
});


// mail
$(".form").submit(function () {

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
        async: true,
        success: function (data) {
            $(this).find("input").val("");

            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            });

            $('#thanks__modal').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);

            setTimeout(function () {
                $("#thanks__modal").css('display', 'none').animate({
                    opacity: 0,
                    top: '45%'
                });
                $('.overlay').fadeOut(400);
            }, 1000);
            $(".form").trigger("reset");
        }
    });
    return false;
});


$(".form-quiz").submit(function () {

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
        async: true,
        success: function (data) {
            $(this).find("input").val("");

            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            });

            $('#thanks__modal').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);

            setTimeout(() => {
                window.location = '../document.zip';
            }, 1000);

            setTimeout(function () {
                $("#thanks__modal").css('display', 'none').animate({
                    opacity: 0,
                    top: '45%'
                });
                $('.overlay').fadeOut(400);
            }, 1000);
            $(".form-quiz").trigger("reset");
        }
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
            $('.mobile-menu').fadeOut();
        }
        return false;
    });
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});


$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".mobile-menu"); // тут указываем ID элемента
    var btn = $('.btn-burger');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
});

$('.question-box > h3').click(function () {
    $('.question-box').removeClass('active');
    $(this).parents('.question-box').addClass('active')
});

$('.btn-toggle').click(function () {
    $(this).toggleClass('click').parents('.manager-info__wrapper').find('.quote-min__visibility').fadeToggle().siblings('.quote-min__hidden').fadeToggle();
});

$('.btn-close-bonus').click(function () {
    $('.bonus-mobile').fadeOut();
});

$('.btn-presents').click(function () {
    $('.bonus-mobile').fadeIn();
});
