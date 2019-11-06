$(function(){
	
	/* 広場画面の状態を管理するための変数 */
	var selected_num = 0;
	/* 疑似データベース() */
	var data = ["味噌汁", "カラオケ", "ゲーム", "散財"];
	//var data1 = getData(data);
	//var data2 = getData(data);
	$(".char1_index_text").text(data[0]);
	$(".char2_index_text").text(data[1]);
	
	//#########################################################################
	//### キャラクター1 タップ遷移 ############################################
	//#########################################################################
	$(".char1").on("click", function(){
		if(!$(".char1").hasClass("selected") &&
				!$(".char2").hasClass("selected")){
			$(".back").addClass("is-disabled");
			$(".char2").fadeOut("fast");
			$(".char1").addClass("question"); //キャラクター１を選択するかの質問状態
			$(".char1").animate({
				"top" : "6px",
				"left" : "7px",
				"width" : "330px",
				"height" : "450px"
			}, "normal", function(){
				$(".char1").addClass("selected"); //選択状況の更新
			});
			$(".char1_index").animate({
				"height" : "100px"
			}, "slow", function(){
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char1_index").html(
					"<p>こんにちは！</p>" +
					"<p>私に興味があるの？</p>"
				);
				$(".btn_yes").css("visibility", "visible");
				$(".btn_no").css("visibility", "visible");
			});
			$(".character1").animate({
				"margin" : "120px 0 0"
			}, "slow");
		}
		if($(".char1").hasClass("selected") && selected_num == 1){
			$(".char1_index").html(
				"<p>ご主人は毎日「"+ data[0] +"」を食べないと</p>" +
				"<p>落ち着かないんだって。</p>"
			);
		}
		if($(".char1").hasClass("selected") && selected_num == 2){
			$(".nes-container.is-rounded").css("padding", "32px 0");
			$(".char1_index").html(
				"<p>あなたは好きな食べ物とかある？</p>"
			);
			$(".char1").addClass("question");
			$(".btn_yes").css("visibility", "visible");
			$(".btn_no").css("visibility", "visible");
		}
		if($(".char1").hasClass("selected") && selected_num == 5){
			$(".char1_index").html(
				"<p>私のお話を聞いてくれてありがとう！</p>" +
				"<p>また会おうね。バイバイ！</p>"
			);
		}
		if($(".char1").hasClass("selected") && selected_num == 6){
			$(".char1").fadeOut(function(){
				$(".char1_index").html("<p></p>");
				$(".char1_index p").addClass("char1_index_text");
				$(".char1").removeClass("selected");
				
				$(".back").removeClass("is-disabled");
				$(".char1").css("top", "10px");
				$(".char1").css("left", "10px");
				$(".char1").css("width", "150px");
				$(".char1").css("height", "200px");
				$(".char2").fadeIn("fast");
				$(".char1_index").css("height", "53px");
				$(".nes-container.is-rounded").css("padding", "10px 0");
				$(".char1_index_text").text(data[2]);
				$(".character1").css("margin", "10px 0");
				$(".char1").fadeIn("fast");
				selected_num = 0;
			});
		}
		if($(".char1").hasClass("selected") == true &&
			$(".char1").hasClass("question") == false){
			selected_num++;
		}
	});
	
	//#########################################################################
	//### キャラクター2 タップ遷移 ############################################
	//#########################################################################
	$(".char2").on("click", function(){
		if(!$(".char1").hasClass("selected") &&
				!$(".char2").hasClass("selected")){
			$(".back").addClass("is-disabled");
			$(".char1").fadeOut("fast");
			$(".char2").addClass("question"); //キャラクター１を選択するかの質問状態
			$(".char2").animate({
				"top" : "6px",
				"left" : "7px",
				"width" : "330px",
				"height" : "450px"
			}, "normal", function(){
				$(".char2").addClass("selected"); //選択状況の更新
			});
			$(".char2_index").animate({
				"height" : "100px"
			}, "slow", function(){
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char2_index").html(
					"<p>ハロー！</p>" +
					"<p>僕に興味があるの？</p>"
				);
				$(".btn_yes").css("visibility", "visible");
				$(".btn_no").css("visibility", "visible");
			});
			$(".character2").animate({
				"margin" : "120px 0 0"
			}, "slow");
		}
		if($(".char2").hasClass("selected") && selected_num == 1){
			$(".char2_index").html(
				"<p>マスターは週1で「"+ data[1] +"」をしないと</p>" +
				"<p>頭痛がするんだってさ。</p>"
			);
		}
		if($(".char2").hasClass("selected") && selected_num == 2){
			$(".nes-container.is-rounded").css("padding", "32px 0");
			$(".char2_index").html(
				"<p>君は趣味ってある？</p>"
			);
			$(".char2").addClass("question");
			$(".btn_yes").css("visibility", "visible");
			$(".btn_no").css("visibility", "visible");
		}
		if($(".char2").hasClass("selected") && selected_num == 5){
			$(".char2_index").html(
				"<p>僕のお話を聞いてくれてありがとう！</p>" +
				"<p>また会おうな。バイバイ！</p>"
			);
		}
		if($(".char2").hasClass("selected") && selected_num == 6){
			$(".char2").fadeOut(function(){
				$(".char2_index").html("<p></p>");
				$(".char2_index p").addClass("char2_index_text");
				$(".char2").removeClass("selected");
				
				$(".back").removeClass("is-disabled");
				$(".char2").css("top", "250px");
				$(".char2").css("left", "170px");
				$(".char2").css("width", "150px");
				$(".char2").css("height", "200px");
				$(".char1").fadeIn("fast");
				$(".char2_index").css("height", "53px");
				$(".nes-container.is-rounded").css("padding", "10px 0");
				$(".char2_index_text").text(data[3]);
				$(".character2").css("margin", "10px 0");
				$(".char2").fadeIn("fast");
				selected_num = 0;
			});
		}
		if($(".char2").hasClass("selected") == true &&
			$(".char2").hasClass("question") == false){
			selected_num++;
		}
	});
	
	
	//#########################################################################
	//### Yesボタン ############################################################
	//#########################################################################
	$(".btn_yes").on("click", function(){
		
		//########################################
		//### キャラクター1の時 ##################
		//########################################
		if($(".char1").hasClass("question")){
			if(selected_num == 0){
				$(".char1").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char1_index").html(
					"<p>ありがとう！私の名前は○○。</p>" +
					"<p>私のご主人は「"+ data[0] +"」が大好きなの。</p>"
				);
			}
			if(selected_num == 2){
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char1_index").html(
					"<p>それじゃあどんな食べ物が好きなの？</p>" +
					"<p>私に教えてほしいな。</p>"
				);
				$(".answer").css("visibility", "visible");
				$(".btn_yes").text("OK");
				$(".btn_no").text("やめる");
			}
			if(selected_num == 3){
				if($(".answer_text").val() == ""){
					selected_num--;
				}else{
					$(".char1_index").html(
						"<p>「" + $(".answer_text").val() + "」</p>" +
						"<p>これでいい？</p>"
					);
					$(".answer").css("visibility", "hidden");
					$(".btn_yes").text("はい");
					$(".btn_no").text("いいえ");
				}
			}
			if(selected_num == 4){
				$(".char1").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char1_index").html(
					"<p>あなたは「" + $(".answer_text").val() + "」が好きなんだね！</p>" +
					"<p>教えてくれてありがとう！</p>"
				);
				$(".answer_text").val("");
			}
		}
		
		//########################################
		//### キャラクター2の時 ##################
		//########################################
		if($(".char2").hasClass("question")){
			if(selected_num == 0){
				$(".char2").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char2_index").html(
					"<p>ありがとう！僕の名前は□□。</p>" +
					"<p>僕のマスターは「"+ data[1] +"」が大好きだ。</p>"
				);
			}
			if(selected_num == 2){
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char2_index").html(
					"<p>それじゃあどんな趣味があるんだい？</p>" +
					"<p>僕に教えてほしいな。</p>"
				);
				$(".answer").css("visibility", "visible");
				$(".btn_yes").text("OK");
				$(".btn_no").text("やめる");
			}
			if(selected_num == 3){
				if($(".answer_text").val() == ""){
					selected_num--;
				}else{
					$(".char2_index").html(
						"<p>「" + $(".answer_text").val() + "」</p>" +
						"<p>これでいい？</p>"
					);
					$(".answer").css("visibility", "hidden");
					$(".btn_yes").text("はい");
					$(".btn_no").text("いいえ");
				}
			}
			if(selected_num == 4){
				$(".char2").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char2_index").html(
					"<p>君は「" + $(".answer_text").val() + "」が好きなんだね！</p>" +
					"<p>教えてくれてありがとう！</p>"
				);
				$(".answer_text").val("");
			}
		}
			
		selected_num++;
		
		
	});
	
	//#########################################################################
	//### Noボタン ############################################################
	//#########################################################################
	$(".btn_no").on("click", function(){
		
		//########################################
		//### キャラクター1の時 ##################
		//########################################
		if($(".char1").hasClass("question")){
			
			if(selected_num == 0){
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char1").fadeOut(function(){
					$(".char1_index").html("<p></p>");
					$(".char1_index p").addClass("char1_index_text");
					$(".char1").removeClass("selected");
					$(".char1").removeClass("question");
					
					$(".back").removeClass("is-disabled");
					$(".char1").css("top", "10px");
					$(".char1").css("left", "10px");
					$(".char1").css("width", "150px");
					$(".char1").css("height", "200px");
					$(".char2").fadeIn("fast");
					$(".char1_index").css("height", "53px");
					$(".nes-container.is-rounded").css("padding", "10px 0");
					$(".char1_index_text").text(data[2]);
					$(".character1").css("margin", "10px 0");
					$(".char1").fadeIn("fast");
				});
				
			}
			if(selected_num == 2 || selected_num == 3){
				$(".char1").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".answer").css("visibility", "hidden");
				$(".answer_text").val("");
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char1_index").html(
					"<p>そうなんだ。</p>" +
					"<p>それじゃあ、いつか見つかるといいね。</p>"
				);
				selected_num = 5;
			}
			if(selected_num == 4){
				$(".answer_text").val("");
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char1_index").html(
					"<p>どんな食べ物が好きなの？</p>" +
					"<p>私に教えてほしいな。</p>"
				);
				$(".answer").css("visibility", "visible");
				$(".btn_yes").text("OK");
				$(".btn_no").text("やめる");
				selected_num = 3;
			}
			
		}
		
		//########################################
		//### キャラクター1の時 ##################
		//########################################
		if($(".char2").hasClass("question")){
			
			if(selected_num == 0){
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".char2").fadeOut(function(){
					$(".char2_index").html("<p></p>");
					$(".char2_index p").addClass("char2_index_text");
					$(".char2").removeClass("selected");
					$(".char2").removeClass("question");
					
					$(".back").removeClass("is-disabled");
					$(".char2").css("top", "250px");
					$(".char2").css("left", "170px");
					$(".char2").css("width", "150px");
					$(".char2").css("height", "200px");
					$(".char1").fadeIn("fast");
					$(".char2_index").css("height", "53px");
					$(".nes-container.is-rounded").css("padding", "10px 0");
					$(".char2_index_text").text(data[3]);
					$(".character2").css("margin", "10px 0");
					$(".char2").fadeIn("fast");
				});
				
			}
			if(selected_num == 2 || selected_num == 3){
				$(".char2").removeClass("question");
				$(".btn_yes").css("visibility", "hidden");
				$(".btn_no").css("visibility", "hidden");
				$(".answer").css("visibility", "hidden");
				$(".answer_text").val("");
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char2_index").html(
					"<p>そうなんだ。</p>" +
					"<p>それじゃあ、いつか見つかるといいね。</p>"
				);
				selected_num = 5;
			}
			if(selected_num == 4){
				$(".answer_text").val("");
				$(".nes-container.is-rounded").css("padding", "13px 0");
				$(".char2_index").html(
					"<p>どんな趣味があるんだい？</p>" +
					"<p>僕に教えてほしいな。</p>"
				);
				$(".answer").css("visibility", "visible");
				$(".btn_yes").text("OK");
				$(".btn_no").text("やめる");
				selected_num = 3;
			}
			
		}
		
		
	});
	
	
	//#####################################################
	//テスト（お遊び） ####################################
	//#####################################################
	
	//戻る・進むボタンで進行度が変化
	$(".back").on("click", function(){
		if($(".back").hasClass("is-disabled") == false){
			alert("記録画面に戻る");
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
	
	
	function getData(datas){
		var num = Math.floor(Math.random() * datas.length);
		var s = datas.splice(num, 1);
		return s;
	}
	
});