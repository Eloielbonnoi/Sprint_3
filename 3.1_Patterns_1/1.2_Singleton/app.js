/*
PAT
RÓ SINGLETON
serveix per assegurar que una classe només és instanciada una vegada creant tan sols un objecte de la classe. Aquest té una accessibilitat global. 
Se solen usar per 
Construeix una aplicació que creï diversos Jugadors. Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.
*/
const { Console } = require('console');
var player = require('./Jugador');
var marquer = require('./Marcador');

console.log('Benvingut')
const jugador1 = new player.Jugador('Manel');
const jugador2 = new player.Jugador('Marta');
const jugador3 = new player.Jugador('Oriol');
const jugadorsTotal = [jugador1, jugador2, jugador3];
const marcador = new marquer.Marcador();
const tiradesPartida = aleatori(4, 10);

console.log(`Avui venen a jugar els jugadors: ${jugador1.name}, ${jugador2.name} i ${jugador3.name}`)
console.log('Aquesta partida tindrà un total de ' + tiradesPartida + ' tirades.')

//JOC

for (let i = 0; i < tiradesPartida; i++) {
    jugadorsTotal.map(jugador => tirada(jugador));
    marcador.updateScores(jugadorsTotal)
}
var finalScore = marcador.resultat
console.log(`El marcador final ha estat: ${finalScore}`);
getWinner(jugadorsTotal);

//MÈTODES
//Mètode per obtenir número aleatori en un rang
function aleatori(inferior, superior) {
    var numPosibilitats = superior - inferior;
    var aleatori = Math.random() * (numPosibilitats + 1);
    aleatori = Math.floor(aleatori);
    return inferior + aleatori;
}

//Mètode tirada. Permet restar punts, però no permet que el jugador tingui score negatiu
function tirada(jugador) {
    var scoreNou = aleatori(-3, 6);
    if (jugador.score + scoreNou >= 0) {
        jugador.addScore(scoreNou);
        jugador.setNumTirades();
    } else {
        console.log(`El jugador: ${jugador.name} perd el torn`)
        jugador.setNumTirades();
    }
}

//Mètode getWinner. reb array jugadors i imprimeix el guanyador o guanyadors en cas d'empat.
function getWinner(jugadors) {
    var arrayScores = jugadors.map(jugador => jugador.score);
    var arrayGuanyadors = [];
    var max = Math.max(...arrayScores); //Obtinc valor màxim de l'array
    jugadors.forEach(jugador => {
        if (jugador.score === max) {
            arrayGuanyadors.push(jugador)
        }
    });
    if (arrayGuanyadors.length > 1) {
        console.log(`Hi ha hagut empat. Els guanyadors són:`)
        for (let i = 0; i < arrayGuanyadors.length; i++) {
            console.log(arrayGuanyadors[i].name);
        }
    } else {
        console.log(`El jugador ${arrayGuanyadors[0].name} és el guanyador amb un resultat de ${max} punts`)
    }
}
