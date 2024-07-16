/* 

Quand l'utilisateur clique sur "Essayer", vous devez :
    1. empêcher la soumission du formulaire
    2. récupérer la valeur tapée dans l'input
    3. vérifier que c'est un nombre et qu'il est compris entre 1 et 10
    4. si c'est le cas, vérifier que ce qu'il a tapé est égal au nombre à trouver
        qui va être calculé aléatoirement.

    5. s'il a trouvé le nombre, dans la div#affichage, afficher :
        Bravo, tu as trouvé le nombre ...
       sinon
            Raté, essaye encore
    BONUS
    6. tant qu'il n'a pas trouvé le bon nombre, continuer à lui demander 
        d'essayer
    7. Afficher le nombre de tentatives
*/

const form = document.querySelector("form");
const input = document.querySelector("input[name='nombre']");
const affichage = document.querySelector("#affichage");

form.addEventListener("submit", function (event) {
  /* event.preventDefault(); annule le comportement par défaut prévu par le 
   navigateur pour l'évenement event :
   - par exemple, le comportement par défaut de l'évenement submit est 
   d'envoyer les données du formulaire
   -pour l'évenement clic d'une balise a, le comportement par défaut 
   est la redirection vers l'URL définie dans href
   */
  event.preventDefault();
  proposition = input.value;
  if (isNaN(proposition) || proposition < 1 || proposition > 10) {
    affichage.innerHTML = "⚠ Tu dois taper un NOMBRE entre 1 et 10";
  } else {
    if (proposition == nbAtrouver) {
      affichage.innerHTML =
        "Bravo, tu as trouvé le nombre <strong>" + nbAtrouver + "</strong>";
    } else {
      affichage.innerHTML =
        "Tu as tapé" + proposition + "? Raté, essaye encore";
    }
  }
});
