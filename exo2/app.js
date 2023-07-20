//mise en place d'une box
const box = document.createElement("div");
box.classList.add("box");

const carre = document.querySelector(".carre");


//mise en place de plusieurs boites
for(let i = 1; i <= 4; i++){
    const newbox = box.cloneNode();
    newbox.innerText = i;
    carre.appendChild(newbox);


    // funcion qui peremt de cliquer sur chaque box generer indépendament et qui active ls css dessus
    newbox.addEventListener("click", function(){
    
        // si il y a la class box-valid
        if(newbox.classList.contains("box-valid")){
            //retire box-valid
            newbox.classList.remove("box-valid");
        } else {
            // sinon ajoute box-valid
            newbox.classList.add("box-valid");
        };
});
};


