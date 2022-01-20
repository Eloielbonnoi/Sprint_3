var player = require('./Jugador');
var marquer = require('./Marcador');

console.log('Benvingut')
const jugador1 = new player.Jugador('Manel');
const jugador2 = new player.Jugador('Marta');
const jugador3 = new player.Jugador('Oriol');
const jugadorsTotal = [jugador1, jugador2, jugador3];
const marcador = new marquer.Marcador()

console.log(jugadorsTotal)

function tirada(jugador) {
    var scoreNou = Math.floor(Math.random() * 10);
    jugador.addScore(scoreNou);
    jugador.setNumTirades();
}

jugadorsTotal.map(jugador => tirada(jugador)); //Nou array amb la 1a tirada
marcador.updateScores(jugadorsTotal)
console.log(jugadorsTotal);

 //jugada1.forEach(jugador=> console.log(jugador.score))


//  console.log(marcador.resultat)
//  console.log(marcador2.resultat)

//  marcador.resultat.push(4);
//  console.log(marcador.resultat)
//  console.log(marcador2.resultat)