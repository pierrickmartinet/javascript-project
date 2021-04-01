$(document).ready(function () {
    console.log('Je peux maintenant écrire du code jQuery');

    // Menu dropDown

    // Séléction de la div de la classe dropdown 
    let dropdown = document.querySelector('.dropdown');


    // Au clic si fermé: ouvre sinon ferme
    dropdown.addEventListener('click', (e) => {

        if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed');
        } else {
            dropdown.classList.add('closed');
        }

    })


    // On charge les informations utiles

    // Récupération de la balise h2
    const statut = document.querySelector("#message");
    // Récupération de la balise p portant l'id pointX
    const pointX = document.querySelector("#pointX");
    // Récupération de la balise p portant l'id pointO
    const pointO = document.querySelector("#pointO");
    // Lorsqu'on joue la valeur de jeuActif est à true, sinon false
    let jeuActif = true;
    // Si le joueur "X" joue la valeur est à "X", si le joueur "O" joue la valeur est à "O"
    let joueurActif = "X";
    // Létat du jeu sur la grille rempli avec "X" ou "O" au fur et à mesure
    let etatJeu = ["", "", "", "", "", "", "", "", ""];

    // initialisation des variables de points à 0
    let nombrePointX = 0;
    let nombrePointO = 0;

    // Liste les possibilités de victoire (3 lignes, 3 colonnes, 2 diagonales)
    const conditionsVictoire = [
        // Première ligne
        [0, 1, 2],
        // Deuxième ligne
        [3, 4, 5],
        // Troisième ligne
        [6, 7, 8],
        // Première colonne
        [0, 3, 6],
        // Deuxième colonne
        [1, 4, 7],
        // Troisième colonne
        [2, 5, 8],
        // Première diagonale
        [0, 4, 8],
        // Deuxième diagonale
        [2, 4, 6],
    ];

    // Messages
    const gagne = () => `le joueur ${joueurActif} a gagné`;
    const egalite = () => "Egalité";
    const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`;
    let totalPointX = () => `Points joueur X : ${nombrePointX}`;
    let totalPointO = () => `Points joueur O : ${nombrePointO}`;

    // Insère dans le DOM la finction tourJoueur "C'est au tou du joueur "joueur actif"
    statut.innerHTML = tourJoueur();
    // Insère dans le DOM nombre de point joueur X (0 par défaut)
    pointX.innerHTML = totalPointX();
    // Insère dans le DOM nombre de point joueur O (0 par défaut)
    pointO.innerHTML = totalPointO();


    // Séléction de chacune des cases, pour chaque case un Listener qui écoute click et éxécute la fonction gestionClicCase()
    document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase));

    // Séléction du bouton recommencer qui écoute le click et éxécute la fonction recommencer()
    document.querySelector("#recommencer").addEventListener("click", recommencer);

    // Séléction du bouton reinitialiser qui écoute le click et éxécute la fonction reinitialiserScore
    document.querySelector("#reinitialiserScore").addEventListener("click", reinitialiserScore);

    //Fonctions

    function gestionClicCase() {

        // Récupération de l'index de la case cliquée (data-index du HTML)
        const indexCase = parseInt(this.dataset.index);

        // Si la case cliquée est déjà joué ou si le jeu n'est pas actif, je ne fait rien (return rien)
        if (etatJeu[indexCase] !== "" || !jeuActif) {
            return;
        } else {
            // Stock l'état actuel du jeu dans le tableau etatJeu, la case de l'index prend pour valeur la valeur de joueurActif
            etatJeu[indexCase] = joueurActif;
            // Ecrit dans la case cliquée (this) la valeur de joueur actif ("X" ou "O")
            this.innerHTML = joueurActif;
        }
        // Appel de la fonction verifGagne
        verifGagne();
    }


    // fonction verifGagne qui vérifie si 3 "X" ou 3 "O" sont alignés (si un joueur à gagné)
    function verifGagne() {

        // Par défaut tourGagnant à la valeur "Faux"
        let tourGagnant = false;

        // Vérification sur chacune des conditions de victoire (tableau consitionsVictoire) comparatif avec le tableau etatJeu
        for (let conditionVictoire of conditionsVictoire) {


            let val1 = etatJeu[conditionVictoire[0]];
            let val2 = etatJeu[conditionVictoire[1]];
            let val3 = etatJeu[conditionVictoire[2]];

            // Si l'une des valeurs est vide, je peux sortir de ma vérification c'est que le joueur n'a pas gagné sur cette occurence
            if ((val1 == "") || (val2 == "") || (val3 == "")) {
                continue;
            }
            // Si les 3 valeurs sont remplis je vérifie si c'est bien le même joueur
            if ((val1 == val2) && (val2 == val3)) {
                tourGagnant = true;

                if (joueurActif == "X") {
                    // Ajout d'un point au joueur X
                    nombrePointX = nombrePointX + 1;
                    pointX.innerHTML = totalPointX();
                    break;

                } else {
                    // Ajout d'un point au joueur O
                    nombrePointO = nombrePointO + 1;
                    pointO.innerHTML = totalPointO();
                    break;
                }

            }
        }

        // Je vérifie si tour gagnant est égal à true, si oui je change le statut de mon h2 à gagné et j'arrète le jeu et je quitte
        if (tourGagnant) {
            statut.innerHTML = gagne();
            jeuActif = false;
            return;
        }

        // Je vérifie si le tableau n'est pas plein, si il est plein alors égalité et j'arrête le jeu et je quitte

        // Si le tableau etatJeu n'inclue pas de vide (!etatJeu.include = "")
        if (!etatJeu.includes("")) {
            statut.innerHTML = egalite();
            jeuActif = false;
            return;
        }

        // Si pas de gagnant, ni d'égalité alors le jeu continue et je change de joueur
        // Je vérifie si joueurActif = X, Si Oui (?) je met "O", Sinon (:) je met "X"
        joueurActif = joueurActif == "X" ? "O" : "X";
        statut.innerHTML = tourJoueur();
    }

    // fonction recommencer qui remet le jeu à zéro
    function recommencer() {
        // Remettre par défaut le joueur actif en "X"
        joueurActif = "X";
        // Jeu actif en true
        jeuActif = true;
        // Remise à zéro du tableau etatJeu
        etatJeu = ["", "", "", "", "", "", "", "", ""];
        // Remise à zéro du titre h2
        statut.innerHTML = tourJoueur();
        // Remise à zéro des cases du jeu
        document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "");
    }

    // Fonction qui réinitialise les scores à 0

    function reinitialiserScore() {
        nombrePointX = 0;
        pointX.innerHTML = totalPointX();
        nombrePointO = 0;
        pointO.innerHTML = totalPointO();
    }


});