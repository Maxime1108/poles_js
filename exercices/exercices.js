let valeur = 1;
var a = valeur > 10 ? 42 : 59;
valeur = "2";
var a = "test";

// boucles
/* EXERCICE : tant que l'utilisateur n'a pas tapé le nombre à trouver,
                on lui redemande de taper un nombre */
let nbTape = -1;
let nbAtrouver = 3;
while (nbTape != nbAtrouver) {
  nbTape = prompt("Tapez un nombre entre 1 et 10 :");
  if (nbTape >= 1 && nbTape <= 10) {
    if (nbTape == nbAtrouver) {
      document.write(nbTape + " : vous avez gagné !<br>");
    } else if (nbTape < nbAtrouver) {
      document.write(nbTape + " : Trop petit !<br>");
    } else {
      document.write(nbTape + " : Trop grand !<br>");
    }
  }
}
