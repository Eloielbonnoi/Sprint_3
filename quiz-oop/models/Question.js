 //Curiós, a la classe Question hi posa el mètode correctAnswer()

class Question{
    /**
     * 
     * @param {string} text explicat al 33:00
     * @param {string[]} choices és un array d'opcions
     * @param {string} answer la resposta correcta
     */

    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} opcion text per encertar
     * @returns {boolean} true si la resposta és correcta
     */

correctAnswer(option){
    return option === this.answer;
}
}

module.exports.Question = Question;

// const question = new Question('ihrg', ['kjbdgf'], 'kjbsdf')
// console.log(question.correctAnswer('kjbsdf'))