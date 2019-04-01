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

	$("ul li").click(function (event) {
		var link = event.toElement.getAttribute("href");
		var text = event.toElement.innerText;
		var className = $(".listBar li")[0].getAttribute("class");

		if (text !== "MENU") {
			$("html, body").animate({
				scrollTop: $(link).offset().top
			}, "slow");
			if(className){
				$(".listBar li").removeClass("menuPhone");
				$(".listBar li").css({display: "none"});
				$("#menu").css({display: "inline"});
			}
		} else {
			//HERE IS THE CODE TO SHOW THE MENU IN CELLPHONES
			if(className){
				$(".listBar li").removeClass("menuPhone");
				$(".listBar li").css({display: "none"});
				$(".listBar #menu").css({display: "inline"});
			}else{
				$(".listBar li").addClass("menuPhone");
				$(".listBar li").css({display: "block"});
			}
		}
	});
});

/**********************/
/* EVENT HANDLERS     */
/**********************/

/**
 * Click in social medias in footer
 * @event is the clicked object
 */

function share(event) {
	var site = encodeURI(event.getAttribute('href'));
	window.open(site);
}

/**
 * Click event in arrow down in header
 * @event is the link object
 */

function hideHeader(event) {
	var id = event.getAttribute('local');
	$("html, body").animate({
		scrollTop: $(id).offset().top - $(".headerBar").height()
	}, "slow");
}

/**
 * This is a function to show the form in right side
 * @event Called after a click in div contact
 */

function openForm(event) {
	var button = document.getElementById('mailButton');
	var form = document.getElementById('form');
	if (form.style.right !== '-10px') {
		$("#mailButton").animate({
			right: '210px'
		}, "slow");
		$("#form").animate({
			right: '-10px'
		}, "slow");
	}else{
		$("#mailButton").animate({
			right: '-28px'
		}, "slow");
		$("#form").animate({
			right: '-250px'
		}, "slow");
	}
}

/**
 * This is a method to move the div when the page is moved
 * @event is defined but never is used
 */
/*     REMOVIDO, Mas ainda será utilizado */
/*
$(window).scroll(function (event) {
	var thisScrollTop = $(window).scrollTop(),
		docWidth = $(window).width(),
		divMarginLeft = $("#left").offset().left,
		divWidth = $("#left").width(),
		soma = divMarginLeft + divWidth;

	if (thisScrollTop >= (docWidth - divWidth) - 6) {  //Não entendo o porque é necessário a auteração de alguns pixels, mas é necessário
		$("#left").css({
			"marginLeft": (docWidth - divWidth) - 6
		});
		$("#right").css({
			"marginRight": (docWidth - divWidth) - 6
		});
	} else if (soma <= docWidth) {
		$("#left").css({
			"marginLeft": $(window).scrollTop() + "px"
		}, "slow");
		$("#right").css({
			"marginRight": $(window).scrollTop() + "px"
		}, "slow");
	}
});
*/