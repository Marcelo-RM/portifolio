/**********************/
/* AUTOMATIC METHODS    */
/**********************/

$(document).ready(function() {
    //Prevent drag images on site
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    //Read json file to create list of courses
    var success = function(data){
        var output = '';  
        $.each(data, function(key,val){
          output += "<h5 class='w3-opacity'><b>"+ val.nome + '</b></h5>';
          output += "<h6 class='w3-text-indigo'><i class='fa fa-calendar fa-fw w3-margin-right'></i>" + val.dataConclusao + "</h6>";
          output += "<p>" + val.escola + "</p>";
          output += "<hr class='styleHR'></hr>";
        });
        $('#listaCursos').html(output);
    };

    $.getJSON('../models/cursos.json', success);
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
 * Metodo criado para exibir ou oculta model exibindo os cursos
 * @event não será utilizado
 */

 function showHideModal(){
    var modal = document.getElementById("cursos");

    if(modal.style.display === "none" || modal.style.display === ""){
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
 }
