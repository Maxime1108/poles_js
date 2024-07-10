/* 
Vous devez échanger les valeurs des 2 variables.
Donc obtenir le résultat suivant : 
    la valeur de a sera 12 
    et la valeur de b sera 5

*/

let a = 5,
  b = 12;
let temp = a;
a = b;
b = temp;
console.log("a", a);
console.log("b", b);

// faire la même chose sans déclarer de variables intérmédiaires (cette
// solution ne fonctionnera qu'avec des numériques)
a = 5;
b = 12;

a = a + b; // a 17
b = a - b; // b 5
a = a - b; // a 12
