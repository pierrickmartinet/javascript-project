$(document).ready(function () {
    console.log('Je peux maintenant écrire du code jQuery');

    
    // Appelle et traitement API par requête Ajax

    $.getJSON("http://api.icndb.com/jokes/random/20")

        // En cas de succés de la requête Ajax
        .done(function (response) {
            let index = 0;
            // Récupère le contenu (un objet) de la requête et le place dans une variable data
            let data = response;
            console.log(data);

            while (index < data.value.length) {
                // Récupère dans l'objet data la propriété joke, la place dans une div et place cette div dans la div "feed"
                $('<div class="blagues"></div>').append(data.value[index].joke).prependTo('#feed');
                index += 1;
            }

        })

        // En cas d'échec de la requête Ajax
        .fail(function (error) {
            alert("La requête s'est terminée en échec. Infos:" + JSON.stringify(error));
        })

        // Toujours exécuté que se soit succés ou échec
        .always(function () {
            //alert("Requête effectuée");
        });



    // Menu dropDown

    // Séléction de la div de la classe dropdown 
    let dropdown = document.querySelector('.dropdown')

    // Au clic si fermé: ouvre sinon ferme
    dropdown.addEventListener('click', (e) => {
        if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed')
        } else {
            dropdown.classList.add('closed')
        }
    })

});