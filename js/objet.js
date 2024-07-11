/* Je veux pourvoir crée des objets qui auront
    les propriétés suivantes : nom, prenom, age.
    Chaque objet aura des valeurs différentes pour ces
    propriétés.
*/

function creerObjectPersonne(argNom, argPrenom, argAge) {
  return {
    nom: argNom,
    prenom: argPrenom,
    age: argAge,
    bonjour() {
      return "Bonjour tout le monde";
    },
    identite() {
      let str = "Je m'appelle" + this.prenom + " " + this.nom;
      return str;
    },
    augmenterAge(annees) {
      this;
    },
  };
}

let p1 = creerObjectPersonne("Cérien", " Jean", 46);
let p2 = creerObjectPersonne("Ateur", " Nordine", 46);
console.log(p1, p2);

console.log(creerObjectPersonne(p1));
console.log(creerObjectPersonne(p2));

/*bonjour(); // erreur, la fonction n'est pas définie*/
console.log(p1.bonjour() + ", bienvenue");
console.log(p2.bonjour());

console.log(p1.identite());
console.log(p2.identite());

/* EXO : Ajouter une méthode 'augmenterAge' qui prend 1 arguement nommé 'annees'.
        Cette méthode ajoute 'annees' à la propriété 'age' de l'objet. */
p1.augmenterAge(10);
document.write(p1.identite() + " et j'ai " + p1.age + " ans");
