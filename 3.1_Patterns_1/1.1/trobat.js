//A la xarxa he trobat això. No entenc res... 
const { readdir, readFile, writeFile } = require('fs'); 
const { join } = require('path'); 
const { promisify } = require('util'); 
const inbox = join(__dirname, "inbox"); 
const outbox = join(__dirname, "outbox"); 
const reverseText = str => 
    Promise.resolve(str .split("") .reverse() .join(""));
     const readdirAsync = promisify(readdir); 
     const readFileAsync = promisify(readFile); 
     const writeFileAsync = promisify(writeFile); 
     async function* getFiles() 
        { try { const files = await readdirAsync(inbox); 
        for (const f of files) { yield f; } } 
        catch (error) { throw Error(error); } } 
    async function run() 
        { try { const files = await getFiles(); 
            for await (const f of files) { const read = await readFileAsync(join(inbox, f), 'utf8'); 
            const reverse = await reverseText(read); 
            await writeFileAsync(join(outbox, f), reverse); 
            console.log(`${f} done`);
         } } 
         catch (error) { console.log(error) } finally { console.log('end') } } run();

