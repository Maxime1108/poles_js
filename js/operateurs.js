// Affiche un titre pour la section des opérateurs arithmétiques
document.write("<h1>Opérateurs arithmétiques</h1>");

/*
Les opérateurs arithmétiques sont :
+ : addition
- : soustraction
* : multiplication
/ : division
% : modulo (reste de la division)
*/

let a = 5;
let b = 2;

// Affiche le résultat de l'addition de a et b
document.write("5 + 2 = ");
document.write(a + b);
document.write("<br>");

// Affecte le résultat de la multiplication de a et b à la variable c
let c = a * b;
document.write("La variable c vaut ");
document.write(c);
document.write("<br>");

// Calcule le modulo de 5 par 2 et l'affecte à la variable c
c = 5 % 2;
document.write("Le modulo de 5 par 2 vaut : ");
document.write(c);
document.write("<br>");

// Affiche le résultat du modulo de 120 par 2
document.write("Le modulo de 120 par 2 vaut ");
document.write(120 % 2);
document.write("<br>");

// Affiche le résultat du modulo de 93 par 3
document.write("Le modulo de 93 par 3 vaut ");
document.write(93 % 3);
document.write("<br>");

// Affiche un titre pour la section de l'opérateur de concaténation
document.write("<h1>Opérateur de concaténation</h1>");
document.write(
  "<p>La concaténation consiste à coller une chaîne de caractères derrière une autre chaîne. </p> <p>L'opérateur est le caractère <code>+</code>.</p>"
);

let texte1 = "Bienvenue au ";
let texte2 = "PoleS Vitry";
document.write(texte1 + texte2 + "<br>");

let texte3 = a + " - " + b + " = " + (a - b);
document.write(texte3 + "<br>");

document.write("<br><br><br>");

// https://sharemycode.fr/js1

/* Exercice :
1. Déclarez les variables nb1 et nb2 avec les valeurs suivantes:
12 et 4

2. Affichez le résultat de toutes les opérations sous la forme : 
    • ... + ... = ...
    • ... - ... = ...
    • ... x ... = ...
    • ... / ... = ...



*/

let nb1 = 12;
let nb2 = 4;

document.write(nb1 + " + " + nb2 + "=" + (nb1 + nb2) + "<br>");

document.write(nb1 + " - " + nb2 + "=" + (nb1 - nb2) + "<br>");

document.write(nb1 + " x " + nb2 + "=" + nb1 * nb2 + "<br>");

document.write(nb1 + " / " + nb2 + "=" + nb1 / nb2 + "<br>");

document.write("5" + 5);
document.write("<br>");
document.write("5.2" * 5);

/* typeof est un opérateur qui permet de connaitre le type d'une expression
 * Il peut être utilisé avec des variables, des expressions, des fonctions, des objets et des tableaux.
 */
document.write("<br>Le type de la variable a est " + typeof a + "<br>");

document.write(typeof "5.2");
document.write("<br>");

document.write(typeof ("5.2" * 1));
document.write("<br>");

document.write("<br><br><br><br><br><br>");

/* typeof est un opérateur qui permet de connaitre le type d'une expression
 */
document.write("<br>Le type de la variable a est " + typeof a + "<br>");

document.write(typeof "5.2");
document.write("<br>");

document.write(typeof ("5.2" * 1));
document.write("<br>");

document.write("5.2" + 1);
document.write("<br>");
document.write(typeof ("5.2" + 1));
document.write("<br>");

document.write(parseFloat("5.2") + 1);
document.write("<br>");
document.write(typeof parseFloat("5.2"));
document.write("<br>");
