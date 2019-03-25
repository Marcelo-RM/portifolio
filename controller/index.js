/**********************/
/* AUTOMATIC METHODS    */
/**********************/

$(document).ready(function () {
	$("#busy").css("display", "none");
	$(".header").css("height", $(window).innerHeight());

	/**
	 * header list menu method
	 * @event is the click event
	 */

	$("li").click(function (event) {
		var link = event.toElement.getAttribute("href");
		var text = event.toElement.innerText;

		if (text !== "MENU") {
			$("html, body").animate({
				scrollTop: $(link).offset().top
			}, "slow");
		} else {
			//HERE IS THE CODE TO SHOW THE MENU IN CELLPHONES
	}
});

/**********************/
/* EVENT HANDLERS     */
/**********************/

});

/**
 * Click in social medias in footer
 * @event is the clicked object
 */

function share(event){
	var site = event.getAttribute('href');
	window.open(site);
}

/**
 * Click event in arrow down in header
 * @event is the link object
 */

function hideHeader(event){
	var id = event.getAttribute('local');
	$("html, body").animate({
		scrollTop: $(id).offset().top
	}, "slow");
}

/**
 * This is a method to move the div when the page is moved
 * @event is defined but never is used
 */

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
