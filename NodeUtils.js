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
let nomArxiu = "provaExercici2.txt";
  
fs.writeFile(nomArxiu, data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Exercici 2 - Missatge escrit correctament dintre del fitxer provaExercici2.txt");
  }
});

// Exercici 3
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile(nomArxiu, 'utf8', function(err, data){
    console.log(data);
});

// Nivell 2
// Exercici 1
// Crea una funció que comprimeixi el fitxer del nivell 1.
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

const zlib = require("zlib");

//per comprimir el fitxer del nivell 1
zlib.gzip(nomArxiu, (err, buffer) => {
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

data = "Aquest és el missatge escrit dintre del fitxer provaExercici2.txt";
var msjConvertido = Buffer.from(data);
var base64 = msjConvertido.toString('base64');
var hexadecimal = msjConvertido.toString('Hex');
var fitxer1base64 = 'fitxer1base64.txt';
var fitxer1hexadecimal = 'fitxer1hexadecimal.txt';

function crea2fitxers() {
  fs.writeFile(fitxer1base64, base64, (err) => {
    if (err) {
      throw error
    } else {
      console.log(`Missatge: " ${data} " \n - Codificat en Base64 i guardat a l'arxiu -${fitxer1base64}-`)
    }
  });
  fs.writeFile(fitxer1hexadecimal, hexadecimal, (err) => {
    if (err) {
      throw error
    } else {
      console.log(`Missatge: " ${data} " \n - Codificat en Hexadecimal i guardat a l'arxiu -${fitxer1hexadecimal}-`)
    }
  });
}
crea2fitxers();

// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.

const crypto = require('crypto');
var encriptKey = "123456789012345678901234"; //random key de encriptación 24 digits
var iniVector = "1234567890123456"; //inicialización Vector 16 digits

fitxer1base64 = 'fitxer1base64.txt';
fitxer1hexadecimal = 'fitxer1hexadecimal.txt';

var encrypt = ((arxiu1) => {
  let cifrado = crypto.createCipheriv('aes-192-cbc', encriptKey, iniVector);
  let encriptada = cifrado.update(arxiu1, 'utf8', 'base64');
  encriptada += cifrado.final('base64');
  return encriptada;
});

arxiuEncriptat = encrypt(fitxer1base64);

var encrypt2 = ((arxiu2) => {
  let cifrado = crypto.createCipheriv('aes-192-cbc', encriptKey, iniVector);
  let encriptada = cifrado.update(arxiu2, 'utf8', 'base64');
  encriptada += cifrado.final('base64');
  return encriptada;
});

arxiuEncriptat2 = encrypt2(fitxer1hexadecimal);

guardaFitxersEncriptats = () => {
  fs.writeFile(fitxer1base64, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`L'arxiu "fitxer1base64.txt" s'ha encriptat correctament: \n ${arxiuEncriptat}`);
    }
  });
  
  fs.writeFile(fitxer1hexadecimal, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`L'arxiu "fitxer1hexadecimal.txt" s'ha encriptat correctament: \n ${arxiuEncriptat2}`);
    }
  });
};

guardaFitxersEncriptats();



// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

