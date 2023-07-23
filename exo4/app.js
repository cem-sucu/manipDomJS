const box = document.createElement('div');
box.classList.add('box');

const carre = document.querySelector(".carre");
carre.appendChild(box);


function boutonPresse(event){
    if(event.keyCode === 40){
        const newBox = box.cloneNode();
        let couleurAleatoir = Math.floor(Math.random()*16777215).toString(16);
        newBox.style.backgroundColor = `#${couleurAleatoir}`;
        carre.appendChild(newBox);
    }if (event.keyCode === 38) {
        const newBox = box.cloneNode();
        carre.lastChild.remove(newBox);
    } else {
        
    }
};


document.addEventListener('keydown', boutonPresse);


/*  Math.floor() arrondit le résultat vers le bas pour obtenir un nombre entier.
La valeur 16777215 est utilisée pour représenter la couleur blanche en utilisant le format RGB (rouge, vert, bleu). Pour obtenir la valeur 16777215, on combine les trois composantes RVB maximales, c'est-à-dire : rouge = 255, vert = 255 et bleu = 255.
valeur_décimale = (255 * 256 * 256) + (255 * 256) + 255
valeur_décimale = 16777215 
suite, la méthode toString(16) convertit ce nombre entier en une chaîne hexadécimale. Le paramètre 16 indique que nous souhaitons une représentation hexadécimale du nombre.*/