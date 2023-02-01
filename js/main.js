$(function () {


    // mainVisual_mainSlide
    $('.mainSlide').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    $('.pro_slide').slick({

    });

    // mainVisual .main_slide_dots button
    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainSlide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');

    });

    // 슬라이드 탭 부분
    $('#slideTab .menu>li').on('click', function () {
        var idx = $(this).index();
        console.log(111)
        $('#slideTab .con>div').removeClass('on');
        $('#slideTab .con>div').eq(idx).addClass('on');

        $('#slideTab .menu>li').removeClass('on');
        $(this).addClass('on');
    })


















})
