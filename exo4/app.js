const box = document.createElement('div');
box.classList.add('box');

const carre = document.querySelector(".carre");
carre.appendChild(box);


function boutonPresse(event){
    if(event.keyCode === 40){
        const newBox = box.cloneNode();
        carre.appendChild(newBox);
    };
};

document.addEventListener('keydown', boutonPresse);