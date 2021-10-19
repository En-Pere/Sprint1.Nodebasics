// Nivell 1
// Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const nuevaMulta = "no";

function funcionDeMultas() {
    return new Promise((resolve, reject) => {
        if (nuevaMulta == "si") {
            resolve("Tienes multa");
        }   else {
            reject ('Te has librado');
        }    
    });
}
funcionDeMultas()
    .then((mensajeHayMulta) => {
console.log(`Mala suerte, ${mensajeHayMulta}`);
})    
    .catch((mensajeNoHayMulta) => {
  console.log(`Buena suerte, ${mensajeNoHayMulta}`)
});

// - Exercici 2
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre 
// (que s'imprimirà per consola) en funció del paràmetre rebut.

// numeroRandom = () => {
//     return Math.floor(Math.random(5)*10); //valor de 0 a 10
// };


var numero = Math.floor(Math.random(5)*10);

frase = (numero, callback() => {
    if (numero>5) {
        return `tu número random es mayor que ${numero}`;
    }   else {
        callback `tu número es menor o igual que 5, ha salido ${numero}`;
    }
 });




















