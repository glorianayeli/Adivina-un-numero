let randomNumber = 0;
let guessCount = 0;

const textSubHeader = document.querySelector('.text-sub-header');
const textData = document.querySelector('.text-data');
const guess = document.querySelector('#guess');
const startButton = document.querySelector('.btn-start');
const sendButton = document.querySelector('.btn-send');

startButton.addEventListener('click', StarGame);
sendButton.addEventListener('click', Intentar);


function StarGame() {
    guessCount = 0;
    textSubHeader.textContent = 'Juego Iniciado';
    textData.textContent = 'Intentos:' + guessCount;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}
function Intentar() {
    guessCount++;
    let numeroUsuario = guess.value;
    if (randomNumber == 0)
        alert('Preciona Comenzar');
    else if(numeroUsuario == randomNumber)
        alert ('Felicidades!');
    else
        alert('Fallaste!');
    textData.textContent = 'Intentos:' + guessCount;  
}
