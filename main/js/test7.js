$(function () {

    //########################################################
    //json形式のデータ
    //########################################################
    //会話テンプレート
    //"name,"=>キャラの名前、"life_index,"=>生活指標名 というように置換されます
    var template = [
        {
            "who": -1,
            "talk": "広場画面へようこそ。<br>僕の名前はプラザ。よろしくね。"
        },
        //ここから変える↓
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
            "talk": "それじゃあ本題に入ろうか。"
        },
        {
            "who": -1,
            "talk": "みんなは普段どんなことをして<br>気分を落ち着かせているのかな？"
        },
        {
            "who": -1,
            "talk": "思い浮かんだ子から言っていこう。"
        },
        {
            "who": 2,
            "talk": "じゃあぼくからいいかな？"
        },
        {
            "who": -1,
            "talk": "もちろん。それじゃあ<br>君はどんなことをして<br>気分を落ち着かせるの？"
        },
        {
            "who": 2,
            "talk": "ぼくは「life_index,"
        },
        {
            "who": -1,
            "talk": "へえー、そうなんだ。<br>他の子たちはどうかな？"
        },
        {
            "who": 0,
            "talk": "えーと、ぼくは「life_index,"
        },
        {
            "who": 1,
            "talk": "ぼくは「life_index,"
        },
        {
            "who": -1,
            "talk": "なるほど。みんな<br>気分を落ち着かせるための<br>いろんな指標を持っているんだね。"
        },
        {
            "who": -1,
            "talk": "教えてくれてどうもありがとう。"
        },
        {
            "who": -1,
            "talk": "じゃあ、そろそろ終わろうか。<br>今日は来てくれてありがとう。"
        },
        {
            "who": -1,
            "talk": "またね、バイバイ。"
        }
    ]

    //疑似データベース
    var user_info = [
        {
            "name": "クママガオ",
            "life_index": "さけるチーズ",
            "life_index_category": "food",
            "life_index_period": "1",
            "life_index_count": "1",
            "icon": "bear"
        },
        {
            "name": "クマオ",
            "life_index": "味噌汁",
            "life_index_category": "food",
            "life_index_period": "1",
            "life_index_count": "1",
            "icon": "bear"
        },
        {
            "name": "ベアーレ",
            "life_index": "ゲーム",
            "life_index_category": "hobby",
            "life_index_period": "1",
            "life_index_count": "1",
            "icon": "bear"
        },
        {
            "name": "ネココニャー",
            "life_index": "野球観戦",
            "life_index_category": "hobby",
            "life_index_period": "30",
            "life_index_count": "1",
            "icon": "cat"
        },
        {
            "name": "ニャンチュー",
            "life_index": "味噌カツ",
            "life_index_category": "food",
            "life_index_period": "7",
            "life_index_count": "1",
            "icon": "cat"
        },
        {
            "name": "ウササピョン",
            "life_index": "サッカー観戦",
            "life_index_category": "hobby",
            "life_index_period": "30",
            "life_index_count": "2",
            "icon": "rabbit"
        },
        {
            "name": "ラビッツ",
            "life_index": "海老フライ",
            "life_index_category": "food",
            "life_index_period": "7",
            "life_index_count": "3",
            "icon": "rabbit"
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

    //広場画面事前準備
    var i = 1;
    swiper.allowTouchMove = false;
    var left_num = Math.floor(Math.random() * user_info.length);
    var center_num = randNum1(user_info, left_num);
    var right_num = randNum2(user_info, left_num, center_num);
    //指標抽出、画像決定
    $(".life_index_left").text(user_info[left_num].life_index);
    $(".life_index_center").text(user_info[center_num].life_index);
    $(".life_index_right").text(user_info[right_num].life_index);
    var left_imgs = make_char_imgs(user_info, left_num, "left");
    var center_imgs = make_char_imgs(user_info, center_num, "center");
    var right_imgs = make_char_imgs(user_info, right_num, "right");
    $(".char_left").attr("src", left_imgs[0]);
    $(".char_center").attr("src", center_imgs[0]);
    $(".char_right").attr("src", right_imgs[0]);
    //広場画面案内
    $(".btn_history_start").on("click", function () {
        $(".talk_history").fadeOut(1000, function () {
            $(".talk_history").css("visibility", "hidden");
            $(".talk_history").css("display", "block");
            $(".history_list").html("");
            $(".btn_history_close").css("display", "inline-block");
            $(".btn_history_start").css("visibility", "hidden");
            //広場画面開始
            $(".btn_history").fadeIn(1000);
            $(".btn_next").fadeIn(1000);
            $(".talk").fadeIn(1000, function () {
                $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.gif");
                $(".talker").attr("src", "./imgs/fairy/fairy_winter1.png");
                display_talk(template[0], user_info, left_num, center_num, right_num);
            });
        });
    });
    $(".btn_next").on("click", function () {
        if (i < template.length) {
            if (template[i].who != template[i - 1].who) {
                if (template[i - 1].who == -1) {
                    $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.png");
                } else if (template[i - 1].who == 0) {
                    $(".char_left").attr("src", left_imgs[0]);
                } else if (template[i - 1].who == 1) {
                    $(".char_center").attr("src", center_imgs[0]);
                } else if (template[i - 1].who == 2) {
                    $(".char_right").attr("src", right_imgs[0]);
                }
            }
            if (template[i].who == -1 || template[i].who == 1) {
                swiper.slideTo(1);
                if (template[i].who == -1) {
                    $(".fairy").attr("src", "./imgs/fairy/fairy_winter1.gif");
                    $(".talker").attr("src", "./imgs/fairy/fairy_winter1.png");
                } else if (template[i].who == 1) {
                    $(".char_center").attr("src", center_imgs[1]);
                    $(".talker").attr("src", center_imgs[0]);
                }
            } else if (template[i].who == 0) {
                swiper.slideTo(0);
                $(".char_left").attr("src", left_imgs[1]);
                $(".talker").attr("src", left_imgs[0]);
            } else if (template[i].who == 2) {
                swiper.slideTo(2);
                $(".char_right").attr("src", right_imgs[1]);
                $(".talker").attr("src", right_imgs[0]);
            }
            display_talk(template[i++], user_info, left_num, center_num, right_num);
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
    function display_talk(talk, user, num0, num1, num2) {
        $(".btn_next").addClass("is-disabled");
        var talking = talk.talk;
        //履歴に追加する
        if (talk.who == -1) {
            $(".history_list").append("<p class=\"talk_history_who\">プラザ</p>");
        } else if (talk.who == 0) {
            $(".history_list").append("<p class=\"talk_history_who\">" + user[num0].name + "</p>");
            talking = replace_talk(talking, user, num0);
        } else if (talk.who == 1) {
            $(".history_list").append("<p class=\"talk_history_who\">" + user[num1].name + "</p>");
            talking = replace_talk(talking, user, num1);
        } else if (talk.who == 2) {
            $(".history_list").append("<p class=\"talk_history_who\">" + user[num2].name + "</p>");
            talking = replace_talk(talking, user, num2);
        }
        $(".history_list").append("<p>" + talking + "</p>");
        //全文字をspanタグで囲む
        $(".talk_content").css({ "opacity": 0 });
        $(".talk_content span").css({ "opacity": 0 });
        $(".talk_content").html(talking);
        $(".talk_content").children().andSelf().contents().each(function () {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });
        //文字を1文字ずつ表示する
        $(".talk_content").css({ "opacity": 1 });
        for (var i = 0; i <= $(".talk_content").children().size(); i++) {
            $(".talk_content").children("span:eq(" + i + ")").delay(35 * i).animate({ "opacity": 1 }, 50);
        };
        $(".btn_next").removeClass("is-disabled");
    }

    //重複しない3つの整数(user_info.length以下)を用意
    function randNum1(arr, num1) {
        var num = Math.floor(Math.random() * arr.length);
        while (num == num1) {
            num = Math.floor(Math.random() * arr.length);
        }
        return num;
    }
    function randNum2(arr, num1, num2) {
        var num = Math.floor(Math.random() * arr.length);
        while (num == num1 || num == num2) {
            num = Math.floor(Math.random() * arr.length);
        }
        return num;
    }

    //表示するキャラクター画像を決定
    function make_char_imgs(arr, num, dir) {
        var char_icon = arr[num].icon;
        var char_img = [];
        if (dir == "left") {
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "_left1.png");
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "_left2.png");
            return char_img;
        } else if (dir == "center") {
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "1.png");
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "1.gif");
            return char_img;
        } else if (dir == "right") {
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "_right1.png");
            char_img.push("./imgs/" + char_icon + "/" + char_icon + "_right2.png");
            return char_img;
        } else {
            alert("error: can\'t make imgs_url");
        }
    }

    //キャラクターの話の中で現れるname,とlife_index,をキャラの名前、指標に置換する
    function replace_talk(talk, user, num) {
        var talking = talk;
        var user_name = user[num].name;
        var user_life_index = user[num].life_index;
        var user_category = user[num].life_index_category;
        var user_period = user[num].life_index_period;
        var user_count = user[num].life_index_count;
        if (talking.indexOf("name,") != -1) {
            talking = talking.replace("name,", user_name);
        }
        if (talking.indexOf("life_index,") != -1) {
            talking = "" + talking.replace("life_index,", user_life_index) + "」を<br>";
            if (user_period == 1) {
                talking = talking + "「1日に" + user_count + "回」";
            } else if (user_period == 7) {
                talking = talking + "「1週間に" + user_count + "回」";
            } else if (user_period == 30) {
                talking = talking + "「1か月に" + user_count + "回」";
            }
            if (user_category == "food") {
                talking = talking + "食べるよ。";
            } else if (user_category == "hobby") {
                talking = talking + "するよ。"
            }
        }
        return talking;
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