// Nivell 1
// Exercici 1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
((num1,num2) => {
    return console.log(num1+num2);
  })(5,15);

  // Nivell 2
  // Exercici 1
  // Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

  var coche = (marca) => ({marca: marca})
  console.log(coche("Seat"));

// Exercici 2
// Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada.//
// La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
 constructor(nom){
   this.nom = nom;
 }
 //mètode
 dirNom(){
   return `Aquest és el nom: ${this.nom}`;
 }
};
const miPersona = new Persona("Maria");
console.log(miPersona.dirNom());

// Nivell 3
// Exercici 1
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// function Coche(marca, color, puertas, cv) {
//   this.marca = marca;
//   this.color = color;
//   this.puertas = puertas;
//   this.cv = cv; 
// }

// function Moto(ruedas, llantas) {
//   Coche.call(this);
//   this.ruedas = ruedas;
//   this.llantas = llantas;
// }

// let coche1 = new Coche("Audi", "Rojo", 4, 130);
// console.log(coche1);

// let moto1 = new Moto("Honda", "Amarilla", 90, 2, 2);
// console.log(moto1);






