/*
PATRÓ SINGLETON
serveix per assegurar que una classe només és instanciada una vegada creant tan sols un objecte de la classe. Aquest té una accessibilitat global. 
Se solen usar per 
Construeix una aplicació que creï diversos Jugadors. Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.
Classe jugador
classe marcador amb patró singleton. 
Al main hi ha d'haver mètode crear jugador que invoqui la classe jugador i el seu constructor
Al main mètode afegir i treure punts (potser 2 mètodes --> canvia marcador)
*/

class Marcador {
    constructor(){
        if(Marcador.instancia){
            return Marcador.instancia;
        }
        this._resultat = [0,0,0]; 
        Marcador.instancia = this;
    }

    //getters
    get resultat(){  //Retornarà un array amb els resultats
        return this._resultat;
    }

    updateScores(arrayPlayers){
    var arrScores= arrayPlayers.map(player=> player.score)
    console.log(arrScores)
    }
}
module.exports.Marcador = Marcador;
