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
        initialSlide: 1,
    });

    //########################################################
    //botui 導入
    //########################################################
    //botui 定義
    var botui = new BotUI("group_work");

    //botui 管理変数
    var i = 0;
    var str_split;

    //botui ワーク前会話テンプレ
    var template_talk_before = new Array(
        "こんにちわ",
        "今日はよろしくね！",
        "こちらこそよろしく,うん",
        "それじゃあ、ワークを始めよう！,それじゃあ、ワークを始めよう",
        "ワークを開始する"
    );
    var who_before = new Array(
        0, 0, 1, 0, -1
    );
    /*
    0: 相手側の会話
    1: 自分の単純な応答（相槌）
    2: 自分の返答（2択解答）
    3: 自分の返答（入力解答）
    */

    //会話
    swiper.allowTouchMove = false;
    botui.message.add({
        delay: 2000,
        content: template_talk_before[i++]
    });
    $(".bot-ui_container").on("click", function () {
        if (i < who_before.length) {
            if (who_before[i] == 0) {
                //相手側の会話のとき
                botui.message.add({
                    delay: 100,
                    content: template_talk_before[i++]
                });
            } else if (who_before[i] == 1) {
                //自分の単純な応答（相槌）
                str_split = template_talk_before[i++].split(",");
                botui.action.button({
                    action: [{
                        text: str_split[0],
                        value: true
                    }, {
                        text: str_split[1],
                        value: false
                    }]
                }).then(function (res) {
                    str_split = template_talk_before[i++].split(",");
                    if (res.value) {
                        botui.message.add({
                            delay: 1100,
                            content: str_split[0]
                        });
                    } else {
                        botui.message.add({
                            delay: 1100,
                            content: str_split[1]
                        });
                    }
                });
            } else if (who_before[i] == 2) {
                //自分の返答（2択解答）
            } else if (who_before[i] == 3) {
                //自分の返答（入力解答）
            } else {
                //前会話終了
                botui.action.button({
                    action: [{
                        text: template_talk_before[i++],
                    }]
                }).then(function () {
                    swiper.allowTouchMove = true;
                    $(".swiper-button-prev").css("visibility", "visible");
                    $(".swiper-button-next").css("visibility", "visible");
                    $(".bot-ui_container").fadeOut();
                });


            }
        }



    });

    /*botui.message.add({
        delay: 100,
        content: 'こんにちわ！'
    }).then(function () { // wait till its shown
        botui.message.add({ // show next message
            delay: 1100,
            content: '今日はよろしくね！'
        });
    });*/

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