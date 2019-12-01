$(function () {

    //########################################################
    //swiper.js 導入
    //########################################################
    let swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //########################################################
    //テスト実装部分
    //########################################################
    $(".back").on("click", function () {
        if ($(".plaza").hasClass("form-off")) {
            $(".plaza").removeClass("form-off");
            $(".plaza").addClass("form-on");
            $(".answer").css("visibility", "visible");
            $(".btn_yes").css("visibility", "visible");
            $(".btn_no").css("visibility", "visible");
        } else {
            $(".plaza").removeClass("form-on");
            $(".plaza").addClass("form-off");
            $(".answer").css("visibility", "hidden");
            $(".btn_yes").css("visibility", "hidden");
            $(".btn_no").css("visibility", "hidden");
        }
    });

});