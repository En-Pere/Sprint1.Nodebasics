// Nivell 1
// Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

let employees = [{id: 1, name: 'Linux Torvalds'}, 
                {id: 2, name: 'Bill Gates'},
                {id: 3, name: 'Jeff Bezos'}]; 

let salaries = [{id: 1, salary: 4000}, 
                {id: 2, salary: 1000},
                {id: 3, salary: 2000}];

var id = 1; //variable que determina la id per treure el nom o el salari

//arrow function cercant l'objecte pel seu ID
const getEmployee = (id) => {
    return new Promise ((resolve, reject) => {
        var busqueda = employees.find(elemento => elemento.id === id);
        if (busqueda) {
            resolve (busqueda);
        } else {
            reject ('Error, no hay datos de nombre');
        }
    });  
}
getEmployee(id)
    .then((message) => { 
    console.log(message);
    })
    .catch((errorMessage) => { 
    console.log(errorMessage);
    });

//arrow function rebent per determinar salari.
const getSalary = (id) => {
    return new Promise ((resolve, reject) => {
        var busqueda = salaries.find(elemento => elemento.id === id);
        if (busqueda) {
            resolve (busqueda);
        } else {
            reject ('Error, no hay datos de salario');
        }
    });  
}
getSalary(id)
    .then((message) => { 
    console.log(message);
    })
    .catch((errorMessage) => { 
    console.log(errorMessage);
    });

// Exercici 2
// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
// usant les funcions que has definit a l'exercici anterior.

async function asinRes() {
    try {
        const resultado = await getEmployee(id);
        const resultado2 = await getSalary(id);
        console.log(resultado.name,  resultado2.salary);
    } catch (errorMessage) {
        console.log('Error, no hay datos')
    }  
}
asinRes();

// Nivell 2
// Exercici 1
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

var nombre = 'María';

const saludar = (nombre) => {
    return new Promise((resolve, reject) => {
        if(typeof nombre === 'string') {
            setTimeout(() => {
                resolve (`Hola ${nombre}`);
                }, 2000); 
        }   else {
                reject ('No has ingresado un nombre')

        }
        
    }); 
}

async function novaFunAsinc() {
    try {
        const bienvenida = await saludar(nombre);
        console.log(bienvenida);
    } catch (errorMessage) {
        console.log(errorMessage)
    }
}
novaFunAsinc();

// Nivell 3
// Exercici 1
// Captura tots els errors possibles dels nivells 1 i 2.

/*Errors correctament "disparats" al .catch quan les variables id no són vàlides o 
quan la variable nombre (del nivell2) no és un string*/




