/**********************/
/* AUTOMATIC METHODS    */
/**********************/

$(document).ready(function() {
    $("#busy").css("display", "none");

    /**
     * header list menu method
     * @event is the click event
     */

    $("ul li").hover(
        (oEvent) => {
            var li = event.target.getAttribute("id");
            if (li === "projetos") {
                showHideProjetos();
                return;
            }
        },
        (oEvent) => {
            var li = event.target.getAttribute("id");
            var parentId = event.target.parentElement.getAttribute("id");
            if (li === "projetos" || parentId === "listaProjetos" || parentId === "projetos") {
                showHideProjetos();
                return;
            }
        }
    );

    $("ul li").click(function(event) {
        //var li = event.target.getAttribute("id");
        //if (li === "projetos") {
        //	showHideProjetos();
        //	return;
        //}
        var link = event.target.getAttribute("href");
        var text = event.target.innerText;
        var className = $(".listBar li")[0].getAttribute("class");

        if (text !== "MENU") {
            $("html, body").animate({
                scrollTop: $(link).offset().top - 150
            }, "slow");
            if (className) {
                $(".listBar li").removeClass("menuPhone");
                $(".listBar li").css({
                    display: "none"
                });
                $("#menu").css({
                    display: "inline"
                });
            }
        } else {
            //HERE IS THE CODE TO SHOW THE MENU IN CELLPHONES
            if (className) {
                $(".listBar li").removeClass("menuPhone");
                $(".listBar li").css({
                    display: "none"
                });
                $(".listBar #menu").css({
                    display: "inline"
                });
            } else {
                $(".listBar li").addClass("menuPhone");
                $(".listBar li").css({
                    display: "block"
                });
            }
        }
    });

    $("#listaProjetos a").click(function(event) {
        $("#listaProjetos").css({
            display: "none"
        });
    });

    /**
     * Metodo que exibirá os dados ocultos abaixo do cabeçalho de experiencias
     * @event {object} elemento da view, h2 usando target
     */

    $(".exp").click(function(event) {
        var pId = event.target.parentNode.id;
        var show = $("#" + pId + " p")[0].className;
        if (show) {
            $("#" + pId + " p").slideUp(function() {
                $("#" + pId + " p").removeClass("expShow");
            });
        } else {
            $("#" + pId + " p").addClass("expShow");
            $("#" + pId + " p").slideDown();
        }
    });

    /**
     * Metodo chamado quando clica em um app
     * @event {object} elemento da view, tile usando target
     */
    $(".tiles").click(function(event) {
        var classe = event.target.getAttribute("class");
        var link = encodeURI(event.target.getAttribute("link"));
        if (!classe) {
            classe = event.target.parentElement.getAttribute("class");
            link = encodeURI(event.target.parentElement.getAttribute("link"));
        }

        if (classe.indexOf('active') === -1) {
            return;
        }

        window.open(link);

    });

    //Prevent drag images on site
    $('img').on('dragstart', function(event) { event.preventDefault(); });
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
    } else {
        $("#mailButton").animate({
            right: '-28px'
        }, "slow");
        $("#form").animate({
            right: '-250px'
        }, "slow");
    }
}

function showHideProjetos() {
    var display = $("#listaProjetos").css("display");

    if (display === "block") {
        var cssConfig = "none"
    } else {
        cssConfig = "block"
    }

    $("#listaProjetos").css({
        display: cssConfig
    });
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