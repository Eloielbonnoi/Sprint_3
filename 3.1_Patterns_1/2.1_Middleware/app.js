/*
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands incials en cadascuna de les operacions. 
Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent 
als valors abans del resultat final
*/

const data = require('./data')
const Middleware = require('./Middleware');
const middleware = new Middleware();
//Operacions
let suma = (num1, num2) => num1 + num2;
let resta = (num1, num2) => num1 - num2;
let multiplicacio = (num1, num2) => num1 * num2;

let operand1 = data.data[randomNum(1, data.data.length)].num1;
let operand2 = data.data[randomNum(1, data.data.length)].num2;
const numSwitch = randomNum(1, 4)
calcula(numSwitch, operand1, operand2);

//Middleware
middleware.use(function (num1, next) {
    let resultat = Math.pow(num1, 2);
    console.log(`El cuadrat de ${num1} és ${resultat}`)
    next();
});

middleware.use(function(num1, next) {
    let resultat = Math.pow(num1, 3);
    console.log(`El cub de ${num1} és ${resultat}`)
    next();
});
middleware.use(function(num1, num2, next) {
    let resultat = num1/num2;
    console.log(`El resultat de dividir ${num1} entre ${num2} és ${resultat}`)
    next()
});

console.log(middleware.middlewares)
//Mètode switch operacions
function calcula(num, operand1, operand2){
switch (num) {
    case 1:
        let resultat = suma(operand1, operand2);
        console.log(`La suma del valor ${operand1} i del valor ${operand2} dóna de resultat ${resultat}`);
        break;
    case 2:
        let resultat1 =resta(operand1, operand2);
        console.log(`La suma del valor ${operand1} menys el valor ${operand2} dóna de resultat ${resultat1}`);
        break;
    case 3:
        let resultat2 =multiplicacio(operand1, operand2);
        console.log(`La multiplicació del valor ${operand1} pel valor ${operand2} dóna de resultat ${resultat2}`);
        break;
    default:
        console.log('Hi ha hagut un error');
}
}

//Mètode get random number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//suma(data.data[0].num1, data.data[0].num2)

//console.log(suma(data.data[0].num1, data.data[0].num2))
//console.log(data.data[0].num1, data.data[0].num2)