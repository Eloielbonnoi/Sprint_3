//https://www.youtube.com/watch?v=t_2PI3fHp_I&ab_channel=FaztCode

import { questions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import {UI} from './models/UI.js';
//console.log(questions[0].correctAnswer('kjbwf')) apareix false a la consola del navegador

function main(){
   const quiz = new Quiz(questions);
   const ui = new UI();
   ui.showQuestion('Eixa es la pregunta')
}
main();