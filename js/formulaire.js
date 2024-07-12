/*
EXO : 1. Avec javascript, ajouter le texte 'formulaire de connexion' à la balise qui
        à l'ID résultat

      2. Changer la couleur de fond des balises <input>
*/
// Ajouter le texte 'formulaire de connexion' à la balise qui a l'ID 'resultat'
window.addEventListener("load", function () {
  document.getElementById("resultat").innerHTML =
    "<strong>Formulaire</strong> de <i>connexion</i>";
  this.document.querySelector("#resultat").innerHTML =
    "modifié avec querySelector";

  let input = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = "#5ea9ce";
  }

  document.querySelectorAll("input").forEach(function (elementInput) {
    elementInput.style.border = "2px solid green";
  });

  document
    .querySelector("form")
    .addEventListener("submit", function (eventSubmit) {
      /* La méthode preventDefault() qui existe pour tous les objets de type évènements,
        permet d'annuler le comportement par défaut d'un évènement.
        Par exemple, le comportement par défaut de l'évènement "submit" d'une balise
        <form> est d'envoyer le formulaire vers l'URL défini dans 'action'. Donc si
        aucun URL n'est défini dans action, la page est rechargée.

        Autre exemple : le comportement par défaut de l'évènement "click" sur une balise
        <a> est de rediriger vers la page définie dans 'href'.
        */
      eventSubmit.preventDefault();
      let texte = "";
      document.querySelectorAll("input").forEach(function (inputElement) {
        texte += inputElement.name + " = " + inputElement.value + "<br>";
      });
      console.log(texte);
      document.querySelector("#resultat").innerHTML = texte;
    });
});
