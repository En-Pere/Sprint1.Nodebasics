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

var id = 2; //variable que determina la id per treure el nom o el salari

//arrow function cercant l'objecte pel seu ID
const getEmployee = (id) => {
    return new Promise ((resolve, reject) => {
        var busqueda = employees.find(elemento => elemento.id === id);
        if (busqueda) {
            resolve (busqueda);
        } else {
            reject (errorMessage);
        }
    });  
}
getEmployee(id)
    .then((message) => { 
    console.log(message);
    })
    .catch(() => { 
    console.log('Error, no hay datos de nombre');
    });

//arrow function rebent per determinar salari.
const getSalary = (id) => {
    return new Promise ((resolve, reject) => {
        var busqueda = salaries.find(elemento => elemento.id === id);
        if (busqueda) {
            resolve (busqueda);
        } else {
            reject (errorMessage);
        }
    });  
}
getSalary(id)
    .then((message) => { 
    console.log(message);
    })
    .catch(() => { 
    console.log('Error, no hay datos de salario');
    });

// Exercici 2
// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
// usant les funcions que has definit a l'exercici anterior.

const resultadoBusqueda = (id) => {
    let empleat = employees.find(o => o.id === id); //guardo el objeto empleado
    let empleatSalari = salaries.find(o => o.id === id); //guardo el objeto salario
    let frase = `El empleado buscado es: ${empleat.name} y su salario es: ${empleatSalari.salary}`; //guardo frase con el valor de cada objeto.
    return frase;
}

async function asinRes() {
    const resultado = await resultadoBusqueda(id);
    let empleat = employees.find(o => o.id === id); //guardo el objeto empleado
    let empleatSalari = salaries.find(o => o.id === id); //guardo el objeto salario
    console.log(`El empleado buscado es: ${empleat.name} y su salario es: ${empleatSalari.salary}`);
}

asinRes();
















