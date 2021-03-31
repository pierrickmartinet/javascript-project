$(document).ready(function () {
    console.log('Je peux maintenant écrire du code jQuery');

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


    // Affichage du formulaire d'ajout au click sur le "+"


    // La variable galleryForm prend pour valeur la div du formulaire de la page Gallerie
    let galleryForm = document.querySelector('.divContainerFormGallery');
    // La variable iconGalleryAdd prend pour valeur l'icon iconGalleryAdd
    let iconGalleryAdd = document.querySelector('.iconGalleryAdd');


    iconGalleryAdd.addEventListener('click', (e) => {


        // Si la valeur de la classe de la div du galleryForm est égale à "les deux classes présentes" OU "la classe None"
        if ((galleryForm.classList.value === "divContainerFormGallery divContainerFormGalleryNone") || (galleryForm.classList.value === "divContainerFormGalleryNone")) {
            // Alors, enlève la classe None et ajoute la classe divContainerFormGallery (Ajoute le formulaire)
            galleryForm.classList.remove("divContainerFormGalleryNone");
            galleryForm.classList.add("divContainerFormGallery");

        } else {
            // Sinon enlève la classe divContainerFormGallery et ajoute la classe None (Cache le formulaire)
            galleryForm.classList.remove("divContainerFormGallery");
            galleryForm.classList.add("divContainerFormGalleryNone");
        }

    })


    // Gallerie d'image


    // La variable iconGalleryMosaic prend pour valeur l'icon inconGalleryMosaic
    let iconGalleryMosaic = document.querySelector('.iconGalleryMosaic');
    // La variable iconGalleryColumn prend pour valeur l'icon inconGalleryColumn
    let iconGalleryColumn = document.querySelector('.iconGalleryColumn');


    function addImageGallery() {
        // La variable imgGallery prend pour valeur un tableau avec les images de la div portant l'id imgGallery
        let imgGallery = document.querySelectorAll('#imgGallery div');

        // Listener sur l'icon Mosaïque au click de la souris (l'évenement se passe lorsque l'utilisateur clique sur l'icon)
        iconGalleryMosaic.addEventListener('click', (e) => {
            index = 0;
            // Au moment ou l'utilisateur clique sur l'icon, pour chaque image, supression de la classe colonne et ajout de la classe Mosaïque tant qu'il y a des images
            while (index < imgGallery.length) {
                imgGallery[index].classList.remove("imgGalleryColumn");
                imgGallery[index].classList.add("imgGalleryMosaic");
                index = index + 1;
            }

        })

        // Listener sur l'icon Colonne au click de la souris (l'évenement se passe lorsque l'utilisateur clique sur l'icon)
        iconGalleryColumn.addEventListener('click', (e) => {
            index = 0;
            // Au moment ou l'utilisateur clique sur l'icon, pour chaque image, supression de la classe Mosaïque et ajout de la classe Colonne tant qu'il y a des images
            while (index < imgGallery.length) {
                imgGallery[index].classList.remove("imgGalleryMosaic");
                imgGallery[index].classList.add("imgGalleryColumn");
                index = index + 1;
            }

        })
    }

    addImageGallery();


    // Ajout d'une image


    // Ajout de l'image à la gallerie


    // Incorporer l'image au bon endroit avec comme source de l'image l'url de l'image choisie stocké dans une variable
    // Lélément form du bloc HTML de la page Gallerie éxécutera cette action (la fonction(e)) lors de l'envoi
    formGallery.onsubmit = function (e) {

        // preventDefault permet d'annuler le rechargement de la page par défaut du bouton envoyer du formulaire
        e.preventDefault();

        // La variable addImage prend pour valeur l'url saisie dans le champ du formulaire formGallery 
        let addImage = document.getElementById('url').value;

        // La variable imgGallery prend pour valeur un tableau avec les images de la div portant l'id imgGallery (pour vérification du format d'affichage)
        let testImageGallery = document.querySelectorAll('#imgGallery div');

        // Si lors de l'ajout les images déjà présentes ont la classe colonne et mosaic ou juste colonne
        if ((testImageGallery[0].classList.value === "imgGalleryColumn imgGalleryMosaic") || (testImageGallery[0].classList.value === "remove imgGalleryColumn")|| (testImageGallery[0].classList.value === "imgGalleryColumn")) {
            // Alors rajoute une div dans le DOM avec l'image en format (taille) colonne ainsi qu'une croix rouge (img) pour remove
            $('<div class="remove imgGalleryColumn"><img class="crossRemove" src="images/remove.svg "alt="croix supprimer"><img class="imgGallery" src="' + addImage + '"alt="Image ajouté"></div>').prependTo('#imgGallery');
        } else {
            // Sinon rajoute une div dans le DOM avec l'image en format (taille) Mosaïque ainsi qu'une croix rouge (img) pour remove
            $('<div class="remove imgGalleryMosaic"><img class="crossRemove" src="images/remove.svg "alt="croix supprimer"><img class="imgGallery" src="' + addImage + '" alt="Image ajouté"></div>').prependTo('#imgGallery');
        }
        addImageGallery();


        // Suppression image

        let crossRemoveImg = document.querySelector('.crossRemove');

        crossRemoveImg.addEventListener('click', (e) => {

        e.target.parentElement.remove();
    
        })
    }



    

    

});