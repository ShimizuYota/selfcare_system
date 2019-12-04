$(function () {

    //json 形式のデータ
    var template = [
        {
            "who": -1,
            "talk": "広場画面へようこそ。<br>僕の名前はプラザ。よろしくね。"
        },
        {
            "who": -1,
            "talk": "それじゃあ、<br>自己紹介からはじめよう。"
        },
        {
            "who": 0,
            "talk": "name,だよ。よろしく。"
        },
        {
            "who": 1,
            "talk": "name,だよ。よろしく。"
        },
        {
            "who": 2,
            "talk": "name,だよ。よろしく。"
        },
        {
            "who": -1,
            "talk": "そろそろ終わろうか。<br>今日は来てくれてありがとう。"
        },
        {
            "who": -1,
            "talk": "またね、バイバイ。"
        }
    ]

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
        initialSlide: 1,
    });

    //########################################################
    //テスト
    //########################################################

    //広場画面テンプレ
    var i = 1;
    swiper.allowTouchMove = false;
    $(".btn_history").hide().fadeIn(1000);
    $(".btn_next").hide().fadeIn(1000);
    $(".talk").hide().fadeIn(1000, function () {
        $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.gif");
        $(".talker").attr("src", "./imgs/fairy/fairy_winter1.png");
        display_talk(template[0]);
    });
    $(".btn_next").on("click", function () {
        if (i < template.length) {
            if (template[i].who != template[i - 1].who) {
                if (template[i - 1].who == -1) {
                    $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.png");
                } else if (template[i - 1].who == 0) {
                    $(".char_left").attr("src", "./imgs/bear/bear_left1.png");
                } else if (template[i - 1].who == 1) {
                    $(".char_center").attr("src", "./imgs/bear/bear1.png");
                } else if (template[i - 1].who == 2) {
                    $(".char_right").attr("src", "./imgs/bear/bear_right1.png");
                }
            }
            if (template[i].who == -1 || template[i].who == 1) {
                swiper.slideTo(1);
                if (template[i].who == -1) {
                    $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.gif");
                    $(".talker").attr("src", "./imgs/fairy/fairy_winter1.png");
                } else if (template[i].who == 1) {
                    $(".char_center").attr("src", "./imgs/bear/bear1.gif");
                    $(".talker").attr("src", "./imgs/bear/bear1.png");
                }
            } else if (template[i].who == 0) {
                swiper.slideTo(0);
                $(".char_left").attr("src", "./imgs/bear/bear_left2.png");
                $(".talker").attr("src", "./imgs/bear/bear_left1.png");
            } else if (template[i].who == 2) {
                swiper.slideTo(2);
                $(".char_right").attr("src", "./imgs/bear/bear_right2.png");
                $(".talker").attr("src", "./imgs/bear/bear_right1.png");
            }
            display_talk(template[i++]);
        } else if (i == template.length) {
            $(".btn_next").fadeOut(1000);
            $(".talk").fadeOut(1000, function () {
                $(".talk_content").html("");
                $(".talker").attr("src", "");
                $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.png");
                $(".back").removeClass("is-disabled");
                $(".forward").removeClass("is-disabled");
                $(".talk").css({ "opacity": 1 });
                $(".talk").css("visibility", "hidden");
                $(".talk").css("display", "block");
                swiper.allowTouchMove = true;
            });
        }
    });

    $(".btn_history").on("click", function () {
        $(".talk_history").css("visibility", "visible");
    });
    $(".btn_history_close").on("click", function () {
        $(".talk_history").css("visibility", "hidden");
    });


    //########################################################
    //関数
    //########################################################

    //文字を1文字ずつ表示する
    function display_talk(talk) {
        //履歴に追加する
        if (talk.who == -1) {
            $(".history_list").append("<p class=\"history_who\">プラザ</p>");
        } else if (talk.who == 0) {
            $(".history_list").append("<p class=\"history_who\">char_left</p>");
        } else if (talk.who == 1) {
            $(".history_list").append("<p class=\"history_who\">char_center</p>");
        } else if (talk.who == 2) {
            $(".history_list").append("<p class=\"history_who\">char_right</p>");
        }
        $(".history_list").append("<p>" + talk.talk + "</p>");
        //全文字をspanタグで囲む
        $(".talk_content").css({ "opacity": 0 });
        $(".talk_content span").css({ "opacity": 0 });
        $(".talk_content").html(talk.talk);
        $(".talk_content").children().andSelf().contents().each(function () {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });
        //文字を1文字ずつ表示する
        $(".talk_content").css({ "opacity": 1 });
        for (var i = 0; i <= $(".talk_content").children().size(); i++) {
            $(".talk_content").children("span:eq(" + i + ")").delay(50 * i).animate({ "opacity": 1 }, 50);
        };
    }


    //########################################################
    //テスト実装部分（遊び）
    //########################################################
    $(".back").on("click", function () {
        if (!$(".back").hasClass("is-disabled")) {
            if ($(".plaza").hasClass("form1-off")) {
                swiper.allowTouchMove = false;
                $(".plaza").removeClass("form1-off");
                $(".plaza").addClass("form1-on");
                $(".swiper-button-prev").css("visibility", "visible");
                $(".swiper-button-next").css("visibility", "visible");
                $(".swiper-pagination").css("visibility", "visible");
                $(".life_index_container1").css("visibility", "visible");
                $(".life_index_container2").css("visibility", "visible");
                $(".life_index_container3").css("visibility", "visible");

                $(".btn_history").addClass("back_on");
                if (!$(".btn_history").hasClass("forward_on")) {
                    $(".btn_history").css("visibility", "hidden");
                }

            } else {
                swiper.allowTouchMove = true;
                $(".plaza").removeClass("form1-on");
                $(".plaza").addClass("form1-off");
                $(".life_index_container1").css("visibility", "hidden");
                $(".life_index_container2").css("visibility", "hidden");
                $(".life_index_container3").css("visibility", "hidden");
                $(".swiper-button-prev").css("visibility", "hidden");
                $(".swiper-button-next").css("visibility", "hidden");
                $(".swiper-pagination").css("visibility", "hidden");

                $(".btn_history").removeClass("back_on");
                if (!$(".btn_history").hasClass("forward_on")) {
                    $(".btn_history").css("visibility", "visible");
                }

            }
        }
    });

    $(".forward").on("click", function () {
        if (!$(".forward").hasClass("is-disabled")) {
            if ($(".plaza").hasClass("form2-off")) {
                $(".plaza").removeClass("form2-off");
                $(".plaza").addClass("form2-on");
                $(".answer").css("visibility", "visible");
                $(".btn_yes").css("visibility", "visible");
                $(".btn_no").css("visibility", "visible");
                $(".talk").css("visibility", "visible");

                $(".btn_history").addClass("forward_on");
                if (!$(".btn_history").hasClass("back_on")) {
                    $(".btn_history").css("visibility", "hidden");
                }

            } else {
                $(".plaza").removeClass("form2-on");
                $(".plaza").addClass("form2-off");
                $(".answer").css("visibility", "hidden");
                $(".btn_yes").css("visibility", "hidden");
                $(".btn_no").css("visibility", "hidden");
                $(".talk").css("visibility", "hidden");

                $(".btn_history").removeClass("forward_on");
                if (!$(".btn_history").hasClass("back_on")) {
                    $(".btn_history").css("visibility", "visible");
                }

            }
        }
    });

});