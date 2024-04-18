const resultElement = document.getElementById('result');
const ac = document.getElementById('ac');
const moreless = document.getElementById('moreless');
const rest = document.getElementById('rest');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const substraction = document.getElementById('substraction');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');
const numberButtons = document.querySelectorAll('.number');
const point = document.getElementById('point');

let result;
let option;
let numone = "0";
let numtwo = "0";

function appendNumber(digit) {
    // Concatenar el dígito seleccionado al número actual
    numone += digit;
    return parseInt(numone);
}

function sumfunction() {
    option = "sum";
    numtwo = numone; // Almacenar el primer número ingresado como el segundo número
    numone = ""; // Reiniciar el primer número ingresado para permitir un nuevo número
}
function substractfunction(){
    option = "substract";
    numtwo = numone; // Almacenar el primer número ingresado como el segundo número
    numone = ""; // Reiniciar el primer número ingresado para permitir un nuevo número

}
function multiplicationfunction(){
    option = "multiplication";
    numtwo = numone; // Almacenar el primer nmero ingresado como el segundo nmero
    numone = ""; // Reiniciar el primer nmero ingresado para permitir un nuevo nmero
}
function divisionfunction(){
    option="division";
    numtwo = numone; // Almacenar el primer nmero ingresado como el segundo nmero
    numone = ""; // Reiniciar el primer nmero ingresado para permitir un nuevo nmero
}
function restFunction(){
    option="rest";
    numtwo = numone; // Almacenar el primer nmero ingresado como el segundo nmero
    numone = ""; // Reiniciar el primer nmero ingresado para permitir un nuevo nmero
}


function equalsfunction() {
    switch (option){
        case "sum":
            // Convertir los nmeros a enteros y realizar la suma
            result = parseFloat(numtwo) + parseFloat(numone);
            // Mostrar el resultado
            resultElement.textContent = result;
            break;
        case "substract":
            // Convertir los nmeros a enteros y realizar la resta
            result = parseFloat(numtwo) - parseFloat(numone);
            // Mostrar el resultado
            resultElement.textContent = result;
            break;
        case "multiplication":
            // Convertir los nmeros a enteros y realizar la multiplicacion
            result = parseFloat(numtwo) * parseFloat(numone);
            // Mostrar el resultado
            resultElement.textContent = result;
            break;
        case "division":
            // Convertir los nmeros a enteros y realizar la division
            result = parseFloat(numtwo) / parseFloat(numone);
            // Mostrar el resultado
            resultElement.textContent = result;
            break;
        case "rest":
            // Convertir los nmeros a enteros y realizar la resta
            result = parseFloat(numtwo) % parseFloat(numone);
            // Mostrar el resultado
            resultElement.textContent = result;
            break;
        default:
            break;
    }

}

function clear() {
    //Limpiamos todos los valores para que puedan ser usados nuevamente
    numone = "";
    numtwo = "";
    resultElement.textContent = "0";
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.textContent;
        // Verificar si el contenido es un punto y si ya existe un punto en el número
        if (content === '.' && !numone.includes('.')) {
            numone += '.';
        } else if (content !== '.' || (content === '.' && numone.includes('.') && numone.length > 0)) {
            // Esto permite añadir números después del punto
            numone += content;
        }
        resultElement.textContent = numone; // Actualizar el resultado mostrado
    });
});
point.addEventListener('click', () => {
    if (!numone.includes('.')) { // Verificar si el número ya contiene un punto decimal
        numone += '.'; // Añadir punto decimal al número actual
        resultElement.textContent = numone; // Actualizar el resultado mostrado
    }
});
moreless.addEventListener('click',()=> {
    //Cambiamos de simbolo el resultado ya que en esta calculadora
    //no podemos poner parametros negativos al principio
    result=result*-1;
    resultElement.textContent = result;
});


division.addEventListener('click',divisionfunction);
multiplication.addEventListener('click',multiplicationfunction);
substraction.addEventListener('click',substractfunction);
addition.addEventListener('click', sumfunction);
equal.addEventListener('click', equalsfunction);
ac.addEventListener('click', clear);
clear();
