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


    // Gallerie d'image

    // La variable iconGalleryMosaic prend pour valeur l'icon inconGalleryMosaic
    let iconGalleryMosaic = document.querySelector('.iconGalleryMosaic');
    // La variable iconGalleryColumn prend pour valeur l'icon inconGalleryColumn
    let iconGalleryColumn = document.querySelector('.iconGalleryColumn');

    // La variable imgGallery prend pour valeur un tableau avec les images de la div portant l'id imgGallery
    let imgGallery = document.querySelectorAll('#imgGallery img');

    
    // Listener sur l'icon Mosaïque au click de la souris (l'évenement se passe lorsque l'utilisateur clique sur l'icon)
    iconGalleryMosaic.addEventListener('click', (e) => {
        index = 0;
        // Au moment ou l'utilisateur clique sur l'icon, pour chaque image, supression de la classe colonne et ajout de la classe Mosaïque tant qu'il y a des images
        while(index < imgGallery.length){
            imgGallery[index].classList.remove("imgGalleryColumn");
            imgGallery[index].classList.add("imgGalleryMosaic");
            index = index + 1;
        }

    })

    // Listener sur l'icon Colonne au click de la souris (l'évenement se passe lorsque l'utilisateur clique sur l'icon)
    iconGalleryColumn.addEventListener('click', (e) => {
        index = 0;
        // Au moment ou l'utilisateur clique sur l'icon, pour chaque image, supression de la classe Mosaïque et ajout de la classe Colonne tant qu'il y a des images
        while(index < imgGallery.length){
            imgGallery[index].classList.remove("imgGalleryMosaic");
            imgGallery[index].classList.add("imgGalleryColumn");
            index = index + 1;
        }

    })

});
