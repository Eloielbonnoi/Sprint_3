class Jugador {
    constructor(name) {
        this._name = name;
        this._score = 0;  //L'objecte s'inicia amb els punts a 0.
        this._numTirades = 0;
    }

    get name() {
        return this._name;
    }
    get score() {
        return this._score;
    }
    get numTirades() {
        return this._numTirades;
    }

    set name(name) {
        this._name = name;
    }
    set score(score) {
        this._score = score;
    }

    //Mètodes
    addScore(newScore) {
        return this._score += newScore
    }
    setNumTirades() {
        this._numTirades += 1;
    }
}

module.exports.Jugador = Jugador;