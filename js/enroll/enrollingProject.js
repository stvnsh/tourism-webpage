$(function(){
	$("#type-day").click(function(){
		changeType($("#type-day"))
	})
	
	$("#type-shot").click(function(){
		changeType($("#type-shot"))
	})
	
	$("#type-inland").click(function(){
		changeType($("#type-inland"))
	})
	
	$("#type-gat").click(function(){
		changeType($("#type-gat"))
	})
	
	$("#type-abroad").click(function(){
		changeType($("#type-abroad"))
	})
	
	function changeType(torismType){
		$(".torism-type-select-now").removeClass("torism-type-select-now");
		torismType.addClass("torism-type-select-now");
	}
})