let flag_name = false;
let flag_age = false;
let flag_sex = false;

$(function(){

    //ニックネーム入力フォームから選択が外れたとき
    $(".box_name").blur(function(){
        if($(".box_name").val() == ""){
            $(".name_alert").css("display", "block");
            flag_name = false;
        }else{
            $(".name_alert").css("display", "none");
            flag_name = true;
        }
    });

    //年齢入力フォームから選択が外れたとき
    $(".profile_age_select").blur(function(){
        if($(".profile_age_select option:selected").val() == 0){
            $(".age_alert").css("display", "block");
            flag_age = false;
        }else{
            $(".age_alert").css("display", "none");
            flag_age = true;
        }
    });


    //ボタンクリック時イベント
    $(".profile_btn").on("click", function(){

        if($(".box_name").val() == ""){
            $(".name_alert").css("display", "block");
            flag_name = false;
        }else{
            $(".name_alert").css("display", "none");
            flag_name = true;
        }

        if($(".profile_age_select option:selected").val() == 0){
            $(".age_alert").css("display", "block");
            flag_age = false;
        }else{
            $(".age_alert").css("display", "none");
            flag_age = true;
        }

        if($('[name="sex"]:checked').val() == "other"){
            $(".sex_alert").css("display", "block");
            flag_sex = false;
        }else{
            $(".sex_alert").css("display", "none");
            flag_sex = true;
        }

        //入力がすべて行われているか
        if(flag_name && flag_age && flag_sex){
            alert("確認ページへ");
        }else{
            alert("入力を正しく行ってください");
        }

    });


});

//年齢選択フォームに選択がされたとき
function selectChange(){
    if($(".profile_age_select option:selected").val() == 0){
        $(".age_alert").css("display", "block");
        flag_age = false;
    }else{
        $(".age_alert").css("display", "none");
        flag_age = true;
    }
}

//性別選択が行われたとき
function radioChange(){
    if($('[name="sex"]:checked').val() == "other"){
        $(".sex_alert").css("display", "block");
        flag_sex = false;
    }else{
        $(".sex_alert").css("display", "none");
        flag_sex = true;
    }
}