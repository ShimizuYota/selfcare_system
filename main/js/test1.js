$(function(){
	
	
	
	//#####################################################
	//テスト（お遊び） ####################################
	//#####################################################
	var $prog = 
	
	//戻る・進むボタンで進行度が変化
	$(".back").on("click", function(){
		if($(".back").hasClass("is-disabled") == false){
			if($(".prog").val() > 0){
				if($(".prog").val() == 100){
					$(".forward").removeClass("is-disabled");
				}
				$(".prog").val($(".prog").val() - 10);
				if($(".prog").val() == 0){
					$(".back").addClass("is-disabled");
				}
			}
		}
	});
	$(".forward").on("click", function(){
		if($(".forward").hasClass("is-disabled") == false){
			if($(".prog").val() < $(".prog").attr("max")){
				if($(".prog").val() == 0){
					$(".back").removeClass("is-disabled");
				}
				$(".prog").val($(".prog").val() + 10);
				if($(".prog").val() == 100){
					$(".forward").addClass("is-disabled");
				}
			}
		}
	});
	
	//メニューボタンを押してメニューを開き、閉じるボタンでメニューを閉じる
	$(".menu").on("click", function(){
		$(".menu-box").css("visibility", "visible");
		$(".menu").css("visibility", "hidden");
		if($(".back").hasClass("is-disabled")){
			$(".back").addClass("already-disabled");
		}else{
			$(".back").addClass("is-disabled");
		}
		if($(".forward").hasClass("is-disabled")){
			$(".forward").addClass("already-disabled");
		}else{
			$(".forward").addClass("is-disabled");
		}
		
	});
	$(".menu-close").on("click", function(){
		$(".menu").css("visibility", "visible");
		$(".menu-box").css("visibility", "hidden");
		if($(".back").hasClass("already-disabled")){
			$(".back").removeClass("already-disabled");
		}else{
			$(".back").removeClass("is-disabled");
		}
		if($(".forward").hasClass("already-disabled")){
			$(".forward").removeClass("already-disabled");
		}else{
			$(".forward").removeClass("is-disabled");
		}
	});
	
});