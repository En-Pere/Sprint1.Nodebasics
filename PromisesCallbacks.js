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
const numeroRandom = (nombre, callback) => {
    console.log(`Hola ${nombre}:`)
    callback();
};

//callback function
function generaNumero() {
    var elNum = Math.floor(Math.random(5)*10);
    if(elNum>5) {
        return console.log(`Tu numero random es > 5, ha salido: ${elNum}`)
    }   else {
        return console.log(`Tu número random es = o < 5, ha salido: ${elNum}`)
    }
};

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
getEmployee(3) //insertar el id a buscar
    .then((message) => { 
    console.log(message);
})
    .catch((message) => { 
    console.log(message);
});

// Exercici 2
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

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
getSalary(3) //insertar el id a buscar
    .then((message) => { 
    console.log(message);
})
    .catch((message) => { 
    console.log(message);
});

// Exercici 3
// Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

Promise.all([getEmployee(1), getSalary(1)]).then(message => {
    console.log(message);
}, message => {
    console.log(message)
});



















