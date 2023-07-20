//mise en place de ma box
const box = document.createElement("div");
box.classList.add('box');
const carre = document.querySelector(".carre");


// creation de 9 box pour le morpion
for( let i = 1; i <= 9; i++){
    const newbox = box.cloneNode();
    carre.appendChild(newbox);
    

    


};




