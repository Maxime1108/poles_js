function bonjour() {
  document.write("Bonjour le monde !<br>");
}

document.write("<h1>Les fonctions</h1>");
// appel de la fonction bonjour
bonjour();
bonjour();

// déclaration d'une fonction avec des arguments
function salut(prenom) {
  document.write("<p>Salut " + prenom + ", bienvenue</p>");
}

// appel de la fonction salut
salut("Greg");
salut("Ilhem");
let prenom = "Sirine";
salut(prenom);

// déclaration d'une fonction avec plusieurs arguments
function phrase(mot1, mot2, mot3) {
  document.write(mot1 + " " + mot2 + " " + mot3);
}

let fin = "d'aller manger";
let debut = "Il est ";
let milieu = "l'heure";
// EXO : appeler la fonction phrase et les variables fin, debut,
//          milieu pour afficher "Il est l'heure d'aller manger"
//
phrase(debut, milieu, fin);

/* EXO : appeler la fonction phrase pour afficher "on a faim"

*/
phrase("on", "a", "faim<br>");
phrase("on a faim");
document.write("<br>");
phrase("on a faim", "", "");
document.write("<br>");
phrase("on a toujours", "faim", "");

//
function phrase2(mot1, mot2, mot3) {
  let str = mot1;
  if (mot2 != undefined) {
    str = str + " " + mot2;
  }

  if (mot3 != undefined) {
    // str = str + " " + mot3;
    str += " " + mot3;
  }

  document.write(str + "<br>");
}

document.write("<hr>");
phrase2("test");
phrase2("test", "test2");

document.write("<hr>");
phrase("test");
document.write("<br>");
phrase(fin, fin);

/**
 * Fonction qui retourne une valeur
 */
function nombreAuCarre(nb) {
  return nb * nb;
  /*  
    • Pour qu'une fonction retourne une valeur on utilse le mot-clé 'return'
    • après 'return' on peut mettre n'importe quelle expression
    • aucune instruction ne peut être exécuté après l'instruction 'return'
    */
}

let resultat = nombreAuCarre(5);
document.write("Le carré de 7 est égal à " + nombreAuCarre(7) + "<br>");

document.write("<p>Théorème de Pythagore : </p>");
document.write(
  "Un triange rectangle dont les côtés ont, pour longueur, 2 et 5. "
);
document.write("Le carré de l'hypothénuse de ce rectangle vaut ");
document.write(nombreAuCarre(2) + nombreAuCarre(5));
document.write("<br>");

/* EXO : 1. Affichez la liste des carrés des nombres de 1 à 100 
         2. Dans la fonction nombreAuCarre, il faut vérifier si le `nb` passé en 
            argument est bien un nombre.
*/
for (let i = 1; i <= 100; i++) {
  // document.write( nombreAuCarre(i) + "<br>");
  document.write(i + "² = " + nombreAuCarre(i) + "<br>");
}

// nombreAuCarre("12");

/* Écrire une fonction nommée tva qui prend un prix en argument et 
    qui retourne la tva calculée sur ce prix :.
         prix * 20 / 100
         prix * .2
*/

function tva(prix) {
  return prix * 0.2;
}
let prix = 100;
document.write("La TVA sur un prix de " + prix + " est de : " + tva(prix));
