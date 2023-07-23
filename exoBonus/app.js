// je créé l'élément div
const box = document.createElement("div");
//je lui ajoute la classe nommé box
box.classList.add("box");
// Jee déclare une variable colorToggle pour stocker l'état de la couleur
let colorToggle = false;
//ici on sélectionne l'élément ayant la classe "carre" du html existant
const carre = document.querySelector(".carre");
// et on ajoute la première boîte au carre depuis l'élement parent carre
carre.appendChild(box);


// je cree ma function qui va me permette de cliquer avec la fleche de bas de creer de nvelle box et ave la fleche de droite de changer la couleur et la flche de haut de supprimer les box 
function bouttonPress(event) {
    // l'instruction pour ma touche de bas
    if (event.keyCode === 40) {
        // console.log(event.keyCode);
        // je clone la box que j'ai creer
        const newBox = box.cloneNode();
        // et je l'ajoute a l'élement parents a .carre
        carre.appendChild(newBox);

        // l'instruction pour ma touche de droite
    } else if (event.keyCode === 39) {
        // je reselectionne toute les boite du carre que j'associe cette fois a la variable boxes car je veux récupérer la derniere boite créer
        const boxes = carre.querySelectorAll(".box");
        // je récup la derniere boite crrer avec .lentgh pour toute la longueur et -1 pour ciblé le dernier
        const lastBox = boxes[boxes.length - 1];
        if (lastBox) {
            // je met en place ternaire en utilisant la variable colorToggle que j'ai initialiser a false c'est a dire vide.
            // donc si ma derniere booite est vide alors affiche moi jaune sinon noire
            lastBox.style.backgroundColor = colorToggle ? "yellow" : "black";
            // et ici on inverse la valeur de colorToggle pour le prochain changement de couleur pour obtenir d'abord la couleur noire donc false, puis avoir true donc jaune et qui permet de pouvoir alterner ensuite entre true et false 
            colorToggle = !colorToggle;
        }


        // l'instruction pour ma touche de haut
    } else if (event.keyCode === 38) { 
        // On sélectionne toutes les boîtes dans le carre comme pouir la touche de droite
        const boxes = carre.querySelectorAll(".box");
        // Je récupère la dernière boîte créée
        const lastBox = boxes[boxes.length - 1];
        if (lastBox) {
            // si c'est lastBox on supprime la dernière boîte créée du carre
            carre.removeChild(lastBox);
        };
    };
        
};

// On ajjoute un écouteur d'événement "keydown" au document et on appel la foction bouttonPress lorsqu'une touche est enfoncée
document.addEventListener("keydown", bouttonPress);