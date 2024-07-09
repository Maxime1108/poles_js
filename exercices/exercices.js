let nbTape = prompt("Tapez un nombre entre 1 et 10 :");
let nbAtrouver = 3;
if (nbTape >= 1 && nbTape <= 10) {
  if (nbTape == nbAtrouver) {
    document.write(nbTape + " : vous avez gagné !<br>");
  } else if (nbTape < nbAtrouver) {
    document.write(nbTape + " : Trop petit !<br>");
  } else {
    document.write(nbTape + " : Trop grand !<br>");
  }
}
