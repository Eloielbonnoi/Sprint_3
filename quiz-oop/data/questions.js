//Aquest arxiu serveix per obtenir un array d'objectes Question a partir de la data que hi ha a data.js
// import {Question} from '../models/Question.js'; 
// import {data} from './data.js';
var pregunta = require('../models/Question.js');
var data = require('../models/Question.js');

//Com que data és un array apliquem map i ens retorna l'array questions que l'exportem
export const questions = data.map(question => new pregunta.Question(question.question, question.choice, question.answer))
