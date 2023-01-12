const form1 = document.getElementById('form1');
form1.addEventListener('submit', handleOk);

const form = document.getElementById('form');
form.addEventListener('submit', handleJogar);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    min: 0,
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randonValue() {
        /* arredondar valor */
        let valorMedio = Math.round(Math.random() * (this.max - this.min) + this.min);
        console.log("Valor Media " + valorMedio);
        console.log("Numero maximo " + this.max);
        console.log("Numero minimo " + this.min);
        return valorMedio;
    }
}

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

let numberDrawn = Guess.numberDrawn();

function handleOk(e) {
    e.preventDefault();
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    console.log(Guess.min);
    console.log(Guess.max);
 
    if(!number1 || !number2) {
        alert('Digite algum valor!')
        return;
    } else {
        Guess.min = number1;
        Guess.max = number2;
        numberDrawn = Guess.numberDrawn();
        alert('Valores inseridos!')
    }
    
}

function handleJogar(e){
    e.preventDefault();
    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    }

    updateAttempt(attempt, ++Guess.attemptNumber)

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou! é o número ' + numberDrawn;

        result.style.transition = '0.4s'
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior';
        status.style.color = '#de4251';
        result.style.backgroundColor = '#ffffff';
        clear();
    } else if (numberDrawn < kick ){
        status.innerHTML = 'O número é menor';
        status.style.color = '#de4251';
        result.style.backgroundColor = '#ffffff';
        clear();
    }
}

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
}