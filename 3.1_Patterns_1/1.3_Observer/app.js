/*
Escriu una aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris 
que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari i un altre amb dos i mostra la recepció dels missatges pels usuaris. 
Utilitza el mòdul events. tema = observable, users= observadors
*/
//TODO està verd encara. Cal replantejar-lo tot.
const observable =require('./Observable');
const numberExample = require('./Subject');

class NumberExampleSpanishConsole {
    notify(model) {
        console.log(`El nuevo número es ${model.value}`);
    }
}

class NumberExampleEnglishConsole {
    notify(model) {
        console.log(`The new number is ${model.value}`);
    }
}

// Instanciamos al sujeto
let numberExample = new NumberExample();

// Le suscribimos sus suscriptores o listeners
numberExample.subscribe(new NumberExampleEnglishConsole());
numberExample.subscribe(new NumberExampleSpanishConsole());

numberExample.increment();
// El nuevo número es 1
// The new number is 1

numberExample.increment();
// El nuevo número es 2
// The new number is 2

numberExample.increment();
// El nuevo número es 3
// The new number is 3