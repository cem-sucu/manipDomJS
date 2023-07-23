// je déclare ma variable et l'associe a l'input du html existant
const input = document.getElementById("saisie");
const conversion = document.querySelector(".conversion");


// je cree ma function pour pouvoir récuper la valeur lors e la saisie en l'associant a la variable valeurSaisie et j'ajoute le calcule pour avoir la conversion
function saisieUtilisateur (){
    const valeurSaisie = input.value * 6.55957;
    conversion.textContent = `${valeurSaisie} Francs `;
    console.log(valeurSaisie);
}


// je met en place l'écouteur input et l'appel a la functio,n
input.addEventListener("input",saisieUtilisateur);