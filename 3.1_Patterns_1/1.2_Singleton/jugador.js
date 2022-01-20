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
    class Jugador {
    constructor(name){
        this._name = name;
        this._score = 0;  //L'objecte s'inicia amb els punts a 0.
        this._numTirades = 0;
    }

    get name(){
        return this._name;
    }
    get score(){
        return this._score;
    }
    get numTirades(){
        return this._numTirades;
    }

    set name(name){
        this._name = name;
    }
    set score(score){
        this._score = score;
    }

    addScore(newScore){
    return this._score += newScore
    }
    setNumTirades(){
        this._numTirades += 1;
    }
}

module.exports.Jugador = Jugador;