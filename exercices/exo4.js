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

const carresNbEntiers = [];
for (let i = 2; i <= 100; i += 2) {
  carresNbEntiers.push([i, i * i]);
}
console.log(carresNbEntiers);

/*4. Ecrire la fonction superieur(a, b)
		- Cette fonction retourne TRUE si a est supérieur à b sinon retourne FALSE
        Par exemple :
        superieur(46, 17) retourne TRUE
        superieur(17, 46) retourne FALSE
        superieur(17, 17) retourne FALSE
        
        En utilisant la fonction superieur(), comparez 2 variables (nb1 et nb2) 
        	et affichez :
            "nb1 est supérieur à nb2" ou "nb1 est inférieur à nb2" 
            (nb1 et nb2 doivent être remplacé par leur valeur)
    	Utilisez cette fonction avec les différentes valeurs suivantes
            nb1 = 15; 	nb2 = 7;
            nb1 = 52; 	nb2 = 324;
            nb1 = 9; 	nb2 = 10;
            nb1 = 4; 	nb2 = -52;
*/
