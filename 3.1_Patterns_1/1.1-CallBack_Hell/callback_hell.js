const { readdir, readFile, writeFile} = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "inbox"); //__dirname --> Directori on reideix l'script que s'està executant. Això donarà el path nomDirectoriOnExecutant/inbox
const outbox = join(__dirname, "outbox"); //és el path  nomDirectoriOnExecutant/outbox

const reverseText = str =>
  str
    .split("")  // Divideix la cadena de paraules de str i les posa separades en un array de substrings. "" farà que cada lletra sigui un element de l'array
    .reverse()  //Inverteix l'ordre de les lletres dins l'array
    .join("");  //Les ajunta de nou en un string sense espais entre elles

// Read and reverse contents of text files in a directory  //readdir(path, options, callback) és un mètode natiu de node 
readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {   //el join fa el path del file
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
});

