/**********************/
/* AUTOMATIC METHODS    */
/**********************/

$(document).ready(function() {
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
