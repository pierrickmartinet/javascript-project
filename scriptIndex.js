$(document).ready(function () {
    console.log('Je peux maintenant écrire du code jQuery');


    // Appelle et traitement API par requête Ajax

    $.getJSON("https://api.icndb.com/jokes/random/20")

        // En cas de succés de la requête Ajax
        .done(function (response) {
            let index = 0;
            // Récupère le contenu (un objet) de la requête et le place dans une variable data
            let data = response;
            console.log(data);

            createJoke(index, data);

        })

        // En cas d'échec de la requête Ajax
        .fail(function (error) {
            alert("La requête s'est terminée en échec. Infos:" + JSON.stringify(error));
        })

        // Toujours exécuté que se soit succés ou échec
        .always(function () {
            //alert("Requête effectuée");
        });


    //Fonction d'affichage des articles dans le DOM
    function createJoke(index, data) {
        while (index < data.value.length) {
            // Récupère dans l'objet data la propriété joke, la place dans une div et place cette div dans la div "feed"
            $('<div class="blagues"></div>').append(data.value[index].joke).prependTo('#feed');
            index += 1;
        }
    }

    // Menu dropDown

    // Séléction de la div de la classe dropdown 
    let dropdown = document.querySelector('.dropdown')

    // Au clic si fermé: ouvre sinon ferme
    dropdown.addEventListener('click', (e) => {
        console.log(dropdown.classList);
        if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed')
        } else {
            dropdown.classList.add('closed')
        }

    })


    // Formulaire dynamique

    // Lélément form du bloc HTML éxécutera cette action (la fonction(e)) lors de l'envoi
    form.onsubmit = function (e) {
        // preventDefault permet d'annuler le rechargement de la page par défaut du bouton envoyer du formulaire
        e.preventDefault();
        console.log(e);
        // la variable name prend pour valeur la valeur de l'input du DOM avec l'id name
        let name = document.getElementById('name').value;
        // la variable joke prend pour valeur la valeur de l'input du DOM avec l'id joke 
        let joke = document.getElementById('joke').value;
        // les variables name et joke sont insérés dans le DOM avec les autres blagues
        $('<div class="blagues">'+ '<div>' + name + '</div>' + '<div>' + joke + '</div>' + '</div>').prependTo('#feed');
    }

});

