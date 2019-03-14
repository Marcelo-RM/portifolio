$(document).ready(function () {
	$(".header").css("height", window.innerHeight);

	$("li").click(function (event) {
		var link = event.toElement.getAttribute("href");
		$("document").load(link);
	});

	$(window).scroll(function () {
		var docWidth = $(window).width();
		var divMargin = $(".delete").offset().left;
		var divWidth = $(".delete").width();
		var soma = divMargin + divWidth;
		if(soma < docWidth){
			$(".delete").css({
				"marginLeft": ($(window).scrollTop()) + "px"
			}, "slow");
		}
	});
});