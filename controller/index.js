var lastScrollTop;

$(document).ready(function () {
	$(".header").css("height", window.innerHeight);

	$("li").click(function (event) {
		var link = event.toElement.getAttribute("href");
		$("document").load(link);
	});

	$(window).scroll(function (event) {
		var thisScrollTop = $(window).scrollTop(); 
		var docWidth = $(window).width();
		var divMarginLeft = $(".delete").offset().left;
		var divWidth = $(".delete").width();
		var soma = divMarginLeft + divWidth;
		
		if( lastScrollTop < thisScrollTop){
			if(soma < docWidth){
				$(".delete").css({
					"marginLeft": ($(window).scrollTop()) + "px"
				}, "slow");
			}
		}
		if(lastScrollTop > thisScrollTop){
			if(divMarginLeft > 0 && thisScrollTop < (docWidth - divWidth)){
				$(".delete").css({
					"marginLeft": ($(window).scrollTop()) + "px"
				}, "slow");
			}
		}
		lastScrollTop = thisScrollTop;
	});
});