// Nivell 1
// - Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

var i = 1;
const missatge = () => {
      setTimeout(function(){
        console.log(`Missatge número ${i}`);
        i++;
        if (i <= 3) {
            missatge();
        }
     }, 1000)
 }
 missatge();

//  Exercici 2
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');
  
let data = "Aquest és el missatge escrit dintre del fitxer provaExercici2.txt";
  
fs.writeFile("provaExercici2.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Exercici 2 - Missatge escrit correctament dintre del fitxer provaExercici2.txt");
  }
});

// Exercici 3
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile('provaExercici2.txt', 'utf8', function(err, data){
    console.log(data);
});

// Nivell 2
// Exercici 1
// Crea una funció que comprimeixi el fitxer del nivell 1.
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

const zlib = require("zlib");

//per comprimir el fitxer del nivell 1
zlib.gzip("provaExercici2.txt", (err, buffer) => {
    if (!err) {
    console.log('Arxiu correctament comprimit');
  } 
  else {
    console.log(err);
  }
});

//per mostrar els arxius del directori
const {exec} = require('child_process');

exec('dir', (error, stdout) => {
    if (error) {
        console.log(`error ${error.message}`)
        return
    } 
    console.log(`Lista de archivos: ${stdout}`)
});

// Nivell 3
// - Exercici 1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.
// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

//revisar esto:

// function encode_base64(filename){
//     fs.readFile(path.join(__dirname,'/public/',filename),function(error,data){
//       if(error){
//         throw error;
//       }else{
//         var buf = Buffer.from(data);
//         var base64 = buf.toString('base64');
//         //console.log('Base64 of ddr.jpg :' + base64);
//         return base64;
//       }
//     });
//   }
//   encode_base64('ddr.jpg');  




















