function tva(prix) {
  let resultat = prix * 0.2;
  prix = 150;
  console.log("tva resultat", resultat);
  console.log("tva prix", prix);
  return resultat;
}

let prix = 5;
let resultat = "peu importe";
console.log("tva(prix)", tva(prix));
console.log("prix", prix);
console.log("resultat", resultat);

//let prix;
//var prix;
//
var nombre = 2;
var nombre = 10;
prix = 10;
//let nombre;

function addition(nb) {
  console.log("addition nombre", nombre);
  return nombre + nb;
}
let calcul = addition(2);
console.log("calcul", calcul);
console.log("nombre", nombre);
console.log(toto);

//
let i = 10;
for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log("valeur de i après la boucle ", i);
