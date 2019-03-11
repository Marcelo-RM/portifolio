$(document).ready(function(){
	$(".header").css('height', window.innerHeight);

	$("li").click(function(event){
		var link = event.toElement.getAttribute("href");
		$("document").load(link);
	});
});
