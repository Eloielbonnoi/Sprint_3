class Marcador {
    constructor() {
        if (Marcador.instancia) {
            return Marcador.instancia;
        }
        this._resultat = [0, 0, 0];
        Marcador.instancia = this;
    }

    //getters
    get resultat() {  //Retornarà un array amb els resultats
        return this._resultat;
    }
    
    //Mètodes
    setResultat(arrayresultats) {
        this._resultat = arrayresultats;
    }

    updateScores(arrayPlayers) {
        var arrScores = arrayPlayers.map(player => player.score)
        this._resultat = arrScores;
        console.log(arrScores)
    }

}
module.exports.Marcador = Marcador;

