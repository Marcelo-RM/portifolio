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
		var thisScrollTop = $(window).scrollTop(),
			docWidth = $(window).width(),
			divMarginLeft = $("#left").offset().left,
			divWidth = $("#left").width(),
			soma = divMarginLeft + divWidth;
		
		if(thisScrollTop >= (docWidth - divWidth)){
			$("#left").css({
				"marginLeft": (docWidth - divWidth)
			});
			$("#right").css({
				"marginRight": (docWidth - divWidth)
			});
		}else if (soma <= docWidth) {
			$("#left").css({
				"marginLeft": $(window).scrollTop() + "px"
			}, "slow");
			$("#right").css({
				"marginRight": $(window).scrollTop() + "px"
			}, "slow");
		}
	});
});
function share(event){
	var site = event.getAttribute('href');
	window.open(site);
}