//mise en place de ma box
const box = document.createElement("div");
box.classList.add('box');
const carre = document.querySelector(".carre");


// creation de 9 box pour le morpion
for( let i = 1; i <= 9; i++){
    const newbox = box.cloneNode();
    carre.appendChild(newbox);
    

    //function click morpion X ou O
    newbox.addEventListener("click", function(){ 
        if(!newbox.classList.contains("box")){
            newbox.innerText = "X";
            newbox.style.color= "red";
        } else if(newbox.classList.contains("box")){
            newbox.innerText = "O";
            newbox.style.color = "green";
        };
        newbox = newbox === "O" ? "O" : "X"; 
    });


    



};




