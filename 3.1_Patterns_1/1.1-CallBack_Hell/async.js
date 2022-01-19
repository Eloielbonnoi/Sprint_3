//Omar, hi ha alguna cosa que falla i no trobo on. 

const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");


const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");


const readMyDir = (inbox) => {  //reb el path del deirectori on ha de llegir el contingut
    return new Promise((resolve, reject) => {
        readdir(inbox, (error, file) => {
            if (error) reject("Error: No es troba la carpeta");
            resolve(file);               //Retorna un array amb els noms dels files del directory
        });
    });
}

const readMyFile = (inbox, file) => { //inbox = path, file = el nom del file el qual agregarem al path de l'arxiu a llegir
    return new Promise((resolve, reject) => {
        readFile(join(inbox, file), "utf8", (error, data) => { //Reb path del file a llegir, codificador, callback
            if (error) reject("Error: Arxiu illegible");
            resolve(data);                    //Retorna els contingut del file
        });
    });
}

const writeMyFile = (outbox, file, data) => { //Reb path del directori d'escriptura, nom del file per afegir al path outbox, data a escriure al nou file
    return new Promise((resolve, reject) => {
        writeFile(join(outbox, file), reverseText(data), error => { //Reb path del file a escriure, data a escriure, callback
            if (error) reject("Error: Impossible guardar l'arxiu");
            resolve();
        });
    });
}
async function main() {
    try {
        const files = await readMyDir(inbox);
        files.forEach(file => {
            const data = await readMyFile(inbox, file);
             await writeMyFile(outbox, file, data);
        })
    }
    catch (err) {
        console.log(err);
    }
}

 main();