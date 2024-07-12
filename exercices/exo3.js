console.log("fichier js");
console.log(document.querySelector("a"));
document.querySelector("a").addEventListener("click", function (eventClick) {
  eventClick.preventDefault();
});
/*
2. Lorsque le curseur de la souris entre sur la 1ere div, changer la position
    de la div.
    - la position verticale sera modifié aléatoirement entre 10 et 500px.
    - la position horizontale sera modifié aléatoirement entre 10 et 500px.

*/

/** Cette fonction retourne un nombre aléatoire compris entre min et max */
function aleatoire(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document
  .querySelector("#madiv")
  .addEventListener("mouseenter", function (event) {
    this.style.position = "absolute";
    this.style.yop = aleatoire(10, 500) + "px"; //par exemple : 150px
    this.style.lef = aleatoire(10, 500) + "px"; //par exemple : 150px
  });
