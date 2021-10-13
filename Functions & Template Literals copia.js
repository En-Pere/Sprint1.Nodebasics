// //Functions & Template Literals

// Nivell 1
// Exercici 1
// Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.

function persona(nomUsuari) {
  return console.log(nomUsuari);
}
persona("Oscar");

// Nivell 2
// Exercici 1
// Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, 
//guardant-los en variables i referenciant-les en la impressió del missatge.

var nom = "Oscar";
var cognom = "Iglesias";
console.log(`La persona es diu: ${nom} ${cognom}`);

// - Exercici 2
// Invoca una funció que retorni un valor mitjançant template literals.

function suma(num1, num2) {
  return console.log(`La suma dels números ${num1} + ${num2} és: ${num1+num2}`);
}
suma(6,4);

// Nivell 3
// Exercici 1
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
// Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

var myArray = [];
var numero = 0;

for (var i=0; i<10; i++) {
  numero = numero + i;
  myArray.push(i);
  console.log(`El numero que agrego es el: ` + i);
  console.log(myArray);
}

// Exercici 2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.

(function(userName){
  console.log(userName);
}) ("Vane");

