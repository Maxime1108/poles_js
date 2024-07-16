/*
1. Déclarer un tableau vide nommé nombresEntiers
2. faire une boucle pour ajouter les 100 premiers nombres 
    (de 1 à 100) dans le tableau
3. déclarer un tableau vide nommé carresNbEntiers qui 
	contiendra des tableaux de 2 valeurs :
    	le nombre entier,
        le carré du nombre entier
        
  Par exemple : 
  	[
    	[ 1, 1 ],
        [ 2, 4 ],
        [ 3, 9 ],
        [ 4, 16 ]
    ]
    
    Faire une boucle qui remplit le tableau carresNbEntiers avec 
    tous les nombres pairs de 2 à 100
*/

let nombresEntiers = [];
for (let i = 1; i <= 100; i++) {
  nombresEntiers.push(i);
}
console.log(nombresEntiers);
