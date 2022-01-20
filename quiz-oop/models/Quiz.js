//Aquesta classe contindrà tota la lògica de la app
//@ts-check
import { Question } from "./Question";
var pregunta = require('../models/Question.js');
export class Quiz{

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions un array de preguntes
     */
    constructor(questions) {
    this.questions = questions;
    }

    /**
     * 
     * @returns {Question} the question found
     */
    getQuestionIndex(){  //Ens permet saber per quina pregunta va l'usuari
        return this.questions[this.questionIndex]
    }

    isEnded(){ //Si el joc té 3 preguntes i anem per la 3 ja sap que s'acabarà
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer algun text
     */
    guess(answer){
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++
    }
}
