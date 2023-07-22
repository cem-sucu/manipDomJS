//mise en place de ma box
//dans ma div class .carre dans le html je cree avec document.creatElement une nouvelle <div>
const box = document.createElement("div");
//la <div> que je viens de creer je lui ajoute un nom de class box donc -> <div class="box">
box.classList.add('box');
// ici je selectionne avec document.querySelector la <div class=".carre"> qui existe deja dans le html
const carre = document.querySelector(".carre");
// ici je selectionne avec document.querySelector la <div class=".text"> qui existe deja dans le html
const text = document.querySelector(".text");
//je creer un array [] vide que j'appel grid
const grid = [];

// je selectionne les balise <p> existante o et x et avec textContent je fait afficher la lettre X et O.
const x = document.querySelector(".x");

const o = document.querySelector(".o");



// je creer une function pour interagir avec les case creer. 
//j'ecris (event) en parametre pour recevoir des informations sur l'événement déclenché lorsque le gestionnaire d'événements est appelé.
// c'est a dire une fois la function boxClique créé et l'appel effectuer sur la case avec newbox.addEventListener("click", boxClick), je peux utiliser event dans les parametres pour pouvoir utiliser son target et donc de pouvoir l'associé a la const boxClicker
function boxClicker(event){
    // console.log(event); // pour trouver la div.box l'élement donc le target

    // console.log(event.target); // renvoie l'élement DOOM sur lequel a lieu le click
    //ici on associe "event.target" a la variable nommé "boxClicker" pour récuprer l'élement div lors du click. la const BoxClicker recupere l'élement 
    const boxClicker = event.target;

    // ici le console.log(carre.children) nous renvoie tous les element enfant de carre qui est de type HTMLcollection, j'utilise donc la méthode Array.from pour le transformer en un array / tableau, puis de pouvoir utiliser une autre méthode qui est indexOf pour permettre de trouver la premiere case cliquer dans le array / tableau, cela va me donnner l'index donc la position de la case cliqué d'ou le faite que j'appel index ma const.  
    // console.log(carre.children); // permet de recuperer tout les element enfant
    // je cree un variable index car je cherche a avoir la position de la case cliqué 
    // donc j'utilise la méthode Array.from(carre.children) pour convertir en un array, et derrier j'ulitse indexOf pour avoir la positon du click sur la case
    const index = Array.from(carre.children).indexOf(boxClicker);


    // si l'indexdela grid et introuvable donc vide le joueurActuel donc la personne qui clique pour occuper la case du signe qui lui sera alloué grace a la function joueurActuel
    if(grid[index] === undefined){
        //permet d'obtenir le symbole X ou O du joueur qui joue actuelement
        const joueurA = joueurActuel();
        //enregistre le symbole du joueur dans le tableau grid est donc sil est undefinied peut etre cliquer sinon non,
        grid[index] = joueurA;
        // console.log(grid); // permet d'obtenir sa position du click par rapport au tableau
        // console.log(grid[index]); // permet de recuperer le symbole

         // Ajouter la classe correspondante pour le symbole actuel
         boxClicker.classList.add(joueurA);

        // permet d'afficher le symbole du joueur au clique
        boxClicker.textContent = joueurA;
    } else {
        // si la case est déja cliquer aors affiche moi ce message
        text.textContent = "cette case a deja étais cliqué"

        // je mets un setTimeOut en place pour que au bout de 1s le text disparaisse
        setTimeout(function(){
            //le text devient vide
            text.textContent = " ";
            //au bout de 1000, donc de 1 seconde
        }, 1000);
    }
};


// function des joueurs X ou O
function joueurActuel(){

    // console.log(grid); permet d'obtenir la position du joeuru au click par rapport au tableau
    // console.log(grid.filter);
    // ici sur la grid la méthode .filter(boolean).length nous renvoie un nvo tableau ne contenant que les valeur vrai, donc celle qui sont déja cliqué, puis en fonction du nombre de case qu'on récupére grace a .length cela nous permet de savoir la longueur des cases.
  
    const cassClicker = grid.filter(Boolean).length;
    // ici on return avec une ternaire et le signe de modulo %, Si le nombre de cases occupées est pair, c'est le tour du joueur X, sinon si c'est impaire, c'est le tour du joueur O.
    return cassClicker %2 === 0 ? "x": "o";
    
};

// creation de 9 box pour le morpion
// Ajouter un écouteur d'événements de clic à chaque case du jeu (9 cases au total).
for( let i = 1; i <= 9; i++){
    // je crrer un clone de ma box creer au début
    const newbox = box.cloneNode();
    // j'ajoute un écouteur d'événements de clic à la nouvelle case, en appelant la fonction "handleBoxClick" lorsque la case est cliquée.
    newbox.addEventListener('click', boxClicker);
    // Ajouter la nouvelle case au conteneur "carre".
    carre.appendChild(newbox);

};