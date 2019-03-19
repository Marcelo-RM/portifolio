$(document).ready(function () {
	$(".header").css("height", $(window).innerHeight());

	$("li").click(function (event) {
		var link = event.toElement.getAttribute("href");
		var text = event.toElement.innerText;

		if (text !== "MENU") {
			$(document).load(link);
		} else {
			//HERE IS THE CODE TO SHOW THE MENU IN CELLPHONES
		}
	});

	$(window).scroll(function (event) {
		var thisScrollTop = $(window).scrollTop();
		var docWidth = $(window).width();
		var divMarginLeft = $("#left").offset().left;
		var divWidth = $("#left").width();
		var soma = divMarginLeft + divWidth;

		if (soma < docWidth) {
			$("#left").css({
				"marginLeft": $(window).scrollTop() + "px"
			}, "slow");
			$("#right").css({
				"marginRight": $(window).scrollTop() + "px"
			}, "slow");
		}
		if (divMarginLeft > 0 && thisScrollTop < (docWidth - divWidth)) {
			$("#left").css({
				"marginLeft": $(window).scrollTop() + "px"
			}, "slow");
			$("#right").css({
				"marginRight": $(window).scrollTop() + "px"
			}, "slow");
		}
	});
});