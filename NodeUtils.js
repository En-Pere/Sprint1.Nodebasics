// Nivell 1
// - Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

var i = 1;
const missatge = () => {
      setTimeout(function(){
        console.log(`Missatge número ${i}`);
        i++;
        if (i < 5) {
            missatge();
        }
     }, 1000)
 }
 missatge();

