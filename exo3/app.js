//mise en place de ma box
//dans ma div class .carre dans le html je cree avec document.creatElement une nouvelle <div>
const box = document.createElement("div");
//la <div> que je viens de creer je lui ajoute un nom de class box donc -> <div class="box">
box.classList.add('box');
// ici je selectionne avec document.querySelector la <div class="carre"> qui existe deja dans le html
const carre = document.querySelector(".carre");

//je creer un array [] vide que j'appel grid
const grid = [];



function boxClicker(event){
    // console.log(event);
    // console.log(event.target);
    const box = event.target;
    console.log(carre);
    console.log(carre.children);
    const index = Array.from(carre.children).indexOf(box);

    if(grid[index] === undefined){
        const joueurA = joueurActuel();
        grid[index] = joueurA;
        // console.log(grid[index]);
        // console.log(grid);
        box.innerText = joueurA;
    }
}

function joueurActuel(){
    // console.log(grid);
    // console.log(grid.filter);
    const cassClicker = grid.filter(Boolean).length;
    return cassClicker %2 === 0 ? "X" : "O";
}

// creation de 9 box pour le morpion
for( let i = 1; i <= 9; i++){
    const newbox = box.cloneNode();
    newbox.addEventListener('click', boxClicker);
    carre.appendChild(newbox);

};