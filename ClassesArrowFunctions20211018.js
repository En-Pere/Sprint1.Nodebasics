// Nivell 1
// Exercici 1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
var suma = ((num1,num2) => {
  return num1+num2;
})(5,15);

console.log(suma); 

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


//classe abstracta
 class Coche {
    constructor() {
      if (this.constructor == Coche) {
        return console.log("La classe abstracta no pot ser instanciada");
      }
    }
    props (color, cv, puertas) {
        this.color = color;
        this.cv = cv;
        this.puertas = puertas;
    }
    
    pitar() {
        return console.log("Piiiii, piiiiiiiiii!!");
    }
};

//nova classe Audi
  class Audi extends Coche {
      acelerar () {
          return console.log("Audi --> 20, 30, 40.... 200!!");
      }
  };

  new Audi().pitar();
  new Audi().acelerar();
  new Audi().props("rojo", 30, 4);
  new Coche();















