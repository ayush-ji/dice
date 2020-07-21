var imgOne = document.querySelector('#player1 img');
var imgTwo = document.querySelector('#player2 img');
var result = document.querySelector('#result');
console.log(imgOne);

var arr = ['/images/dice1.png', '/images/dice2.png', '/images/dice3.png', '/images/dice4.png', '/images/dice5.png', '/images/dice6.png']

function game() {

    imgOne.setAttribute('src', imageSelector());
    imgTwo.setAttribute('src', imageSelector());
    var winner = win();
    console.log(winner);
    if (winner == 'tie') {
        result.innerHTML = 'It\'s a TIE ';
    }
    else if (winner == 'p2') {
        result.innerHTML = 'Player 2 WINS !!';
    }
    else {
        result.innerHTML = 'Player 1  WINS !!';
    }
}

function imageSelector() {
    let selection = arr[Math.floor(Math.random()*6)];
    return selection;
}

function win() {
    if(imgOne.getAttribute('src') == imgTwo.getAttribute('src')){
        return "tie";
    }
    else if(imgOne.getAttribute('src') == '/images/dice1.png' && imgTwo.getAttribute('src') == '/images/dice2.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice1.png' && imgTwo.getAttribute('src') == '/images/dice3.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice1.png' && imgTwo.getAttribute('src') == '/images/dice4.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice1.png' && imgTwo.getAttribute('src') == '/images/dice5.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice1.png' && imgTwo.getAttribute('src') == '/images/dice6.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice2.png' && imgTwo.getAttribute('src') == '/images/dice3.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice2.png' && imgTwo.getAttribute('src') == '/images/dice4.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice2.png' && imgTwo.getAttribute('src') == '/images/dice5.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice2.png' && imgTwo.getAttribute('src') == '/images/dice6.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice3.png' && imgTwo.getAttribute('src') == '/images/dice4.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice3.png' && imgTwo.getAttribute('src') == '/images/dice5.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice3.png' && imgTwo.getAttribute('src') == '/images/dice6.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice4.png' && imgTwo.getAttribute('src') == '/images/dice5.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice4.png' && imgTwo.getAttribute('src') == '/images/dice6.png') {
        return "p2"
    }
    else if(imgOne.getAttribute('src') == '/images/dice5.png' && imgTwo.getAttribute('src') == '/images/dice6.png') {
        return "p2"
    }
    else return "p1"
}

