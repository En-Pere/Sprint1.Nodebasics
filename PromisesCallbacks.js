// Nivell 1
// Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const enviamosmulta = "no";

const multa1 = new Promise ((resolve, reject) => {
    if (enviamosmulta == "yes") {
        resolve (console.log('Te hemos enviado una multa'));
    }   else {
        reject (console.log('Te has librado'));
    }
});

multa1
    .then(hayMulta => {
    console.log('Tienes una multa');
    console.log(hayMulta);
});

multa1
    .catch(noHayMulta => {
    console.log('No tienes multa')
    console.log(noHayMulta);
});


