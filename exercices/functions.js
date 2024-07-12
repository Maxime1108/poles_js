/** Cette fonction retourne un nombre aléatoire compris entre min et max */
function aleatoire(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
