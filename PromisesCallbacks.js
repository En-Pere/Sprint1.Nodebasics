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

//funcion
const numeroRandom = (nombre, generaNumero) => {
    return `Hola ${nombre}: ` + generaNumero;
};

//callback function
function generaNumero(num) {
    if(num>5) {
        return `Has elegido un número mayor que 5`
    }  else {
        return `Has elegido un número igual o menor que 5`
    }
};

console.log(numeroRandom('Macarena', generaNumero(5)))



//pasando función a argumento
numeroRandom('Antonio', generaNumero);

// Nivell 2
// Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{id: 1, name: 'Linux Torvalds'}, 
                {id: 2, name: 'Bill Gates'},
                {id: 3,name: 'Jeff Bezos'}]; 
let salaries = [{id: 1, salary: 4000}, 
                {id: 2, salary: 1000}, 
                {id: 3,salary: 2000}];


var id = 2; //insertar el id del trabajador para que el programa haga las búsquedas

//busca el trabajador
const getEmployee = (id) => { 
    return new Promise((resolve, reject)=>{
        let buscaTrabajador = employees.find(trabajador => trabajador.id === id);
        if (buscaTrabajador) {
            resolve (buscaTrabajador)
        }   else {
            reject ('¡¡ El id buscado no existe !!')
        }
    });
};

//devuelve el mensaje de encontrar al trabajador o no
getEmployee(id)
    .then((message) => { 
    console.log(message);
})
    .catch((message) => { 
    console.log(message);
});

// Exercici 2
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

//busca el salario
const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        let buscaSalario = salaries.find(salario => salario.id === id);
        if (buscaSalario) {
            resolve (buscaSalario)
        }   else {
            reject ('¡¡ El id buscado no existe !!')
        }
    });
};
//devuelve el mensaje de encontrar el salario o no
getSalary(id)
    .then((message) => { 
    console.log(message);
})
    .catch((message) => { 
    console.log(message);
});

// Exercici 3
// Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

Promise.all([getEmployee(id), getSalary(id)]).then(message => {
    console.log(message);
}, message => {
    console.log(message)
});


// Nivell 3
// Exercici 1
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

//suposo que això no està bé. No se fer aquest exercici.
var id2 = 5;

Promise.all([getEmployee(id2), getSalary(id2)]).then(message => {
    console.log(message);
}, message => {
    console.log(message)
});























