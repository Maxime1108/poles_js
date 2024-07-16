let films = [];

films[0] = "Friday the 13th";
films[10] = "Halloween";
console.log(films);

films = [];
films.push("Friday the 13th");
films.push("Halloween");
console.log(films);

films = [];
films.push([11, "Friday the 13th", "Victor Miller"]);
films.push([12, "Halloween", "John Carpenter"]);
films.push([15, "Scream", "Wes Craven"]);

console.log(film.length);

films = [
  [11, "Friday the 13th", "Victor Miller"][(12, "Halloween", "John Carpenter")],
  [15, "Scream", "Wes Craven"],
];

console.log("Mon film préféré est " + films[0][1]);
console.log("Le meilleur réalisateur s'appelle " + films[1][2]); //John Carpenter

//affichez tous les titres de films (console.log)

for (let indice = 0; indice < films.length; indice++) {
  console.log(films[indice][1]);
}

films.forEach(function (element, indice) {
  console.log(indice, element[1]);
});

// Dans le tableau films, remplacez le titre "Halloween" par "Avatar"
films[1][1] = "Avatar";
console.log(films);

// Ajoutez le film suivant dans la variable films
// id : 24
// titre : Piège de cristal
// realisateur : John McTiernan
films.push([24, "Piège de cristal", "John McTiernan"]);

/* Remplir la table HTML avec les valeurs du tableau */
document.querySelector("#btActualiser").addEventListener("click", function () {
  const tbody = document.querySelector("table").querySelector("tbody");

  for (let i = 0; i < films.length; i++) {
    // je crée un élément HTML <tr>
    const ligne = document.createElement("tr");

    // je crée un élément <td> que j'ajoute à l'élement <tr>
    const cellule = document.createElement("td");
    // je change le contenu de cet élément <td>
    cellule.innerHTML = films[i][0];
    ligne.appendChild(cellule);

    const cellule2 = document.createElement("td");
    cellule2.innerHTML = films[i][1]; // titre du film
    ligne.appendChild(cellule2);

    const cellule2 = document.createElement("td");
    cellule2.innerHTML = films[i][2]; // réalisateur du film
    ligne.appendChild(cellule3);

    // j'ajoute la ligne <tr>
  }
});
