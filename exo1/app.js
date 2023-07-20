// mise ne place d'une box
const box = document.createElement("div");
box.classList.add("box");
// ajouter un texte dans la box
box.textContent = "click sur moi ";

const carre = document.querySelector(".carre");
carre.appendChild(box);

// la function qui permet de clicker sur une box et faire apparaitre un prompt
carre.addEventListener("click", function(){
    alert("Class : carre \n - Background-color : rgb(136,174,136) \n - Color : rgb(255, 255, 255) \n - Height : 200 \n - Width : 200 \n - Display : flex \n - Display: 'Times New Roman' (40px)");
});


