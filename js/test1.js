$(function(){

    $(".profile_btn").on("click", function(){
        alert($(".box_name").val());
        alert($(".profile_age_select option:selected").val());
        alert($('[name="sex"]:checked').val());
    });

});