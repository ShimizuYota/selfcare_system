$(function(){
	
	$("#default_select").change(function(){
		var r = $("option:selected").val();
		if(r == 0){
			$(".font1").css("display","inline");
			$(".font2").css("display","none");
			$(".font3").css("display","none");
		}else if(r == 1){
			$(".font2").css("display","inline");
			$(".font1").css("display","none");
			$(".font3").css("display","none");
		}else if(r == 2){
			$(".font3").css("display","inline");
			$(".font1").css("display","none");
			$(".font2").css("display","none");
		}else{}
	});
	
});