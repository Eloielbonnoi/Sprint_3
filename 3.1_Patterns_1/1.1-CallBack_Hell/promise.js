const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");


const inbox = join(__dirname, "inbox"); 
const outbox = join(__dirname, "outbox");
const reverseText = str =>
    str
      .split("")  // Divideix la cadena de paraules de str i les posa separades en un array de substrings. "" farà que cada lletra sigui un element de l'array
      .reverse()  //Inverteix l'ordre de les lletres dins l'array
      .join("");  //Les ajunta de nou en un string sense espais entre elles
  
  const readMyDir = (inbox) => {  //reb el path del deirectori on ha de llegir el contingut
    return new Promise((resolve, reject) => {
      readdir(inbox, (error, file) => {
        if (error) reject("Error: Folder inaccessible");
        resolve(file);               //Retorna un array amb els noms dels files del directory
      });
    });
  }

  const readMyFile = (inbox, file) => { //inbox = path, file = el nom del file el qual agregarem al path de l'arxiu a llegir
    return new Promise((resolve, reject) => {
      readFile(join(inbox, file), "utf8", (error, data) => { //Reb path del file a llegir, codificador, callback
          if (error) reject("Error: File error");
          resolve(data);                    //Retorna els contingut del file
      }); 
    });
  }
  
  const writeMyFile = (outbox, file, data) => { //Reb path del directori d'escriptura, nom del file per afegir al path outbox, data a escriure al nou file
    return new Promise((resolve, reject) => {
       writeFile(join(outbox, file), reverseText(data), error => { //Reb path del file a escriure, data a escriure, callback
          if (error) reject("Error: File could not be saved!");
          resolve();
        });
     });
  }

  readMyDir(inbox)
  .then(files => {
      files.forEach(file => {
          readMyFile(inbox, file)
          .then(data => writeMyFile(outbox, file, data)) 
      });
    })
  .catch(error=>console.log(error))