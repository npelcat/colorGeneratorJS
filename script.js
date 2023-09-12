function getColor() {

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

//Concaténer les variables dans une seule (grâce aux guillements de la touche 7)
const color = `rgb(${r}, ${g}, ${b})`

document.body.style.background = color;
document.body.innerHTML = `<h2>${color}</h2>`
 
}

setInterval(getColor, 2000);




//////////////MY WORK ////////////////////////

// //Création des trois variables évolutives :
// let red = document.getElementById("red");
// let green = document.getElementById("green");
// let blue = document.getElementById("blue");

// //Création de la fonction pour changer la couleur du fond :
// function random_bg_color() {
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
   
//     let bgColor = "rgb(" + x + "," + y + "," + z + ")";

//     red.textContent = x;
//     green.textContent = y;
//     blue.textContent = z;
   
  
//     document.body.style.background = bgColor;
//     }

// random_bg_color();


// // Répétition de la fonction : 

// setInterval(random_bg_color, 2000);


