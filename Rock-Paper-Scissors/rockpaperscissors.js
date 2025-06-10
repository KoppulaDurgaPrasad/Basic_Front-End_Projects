let Score=JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    loss: 0,
    Ties: 0
    };
    updateScore();
        function play(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        result = 'You lose.';
        } else if (computerMove === 'paper') {
        result = 'You win.';
        } else if (computerMove === 'scissors') {
        result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'You win.';
        } else if (computerMove === 'paper') {
        result = 'Tie.';
        } else if (computerMove === 'scissors') {
        result = 'You lose.';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'Tie.';
        } else if (computerMove === 'paper') {
        result = 'You lose.';
        } else if (computerMove === 'scissors') {
        result = 'You win.';
        }
    }
    if(result==='You win.'){
        Score.wins++;
    } else if(result==='You lose.'){
        Score.loss++;
    } else if(result==='Tie.'){
        Score.Ties++;
    }
    localStorage.setItem('Score',JSON.stringify(Score));
    updateScore();
    document.querySelector('.Result').
    innerHTML=result;
    document.querySelector('.moves').
    innerHTML=`You
    <img src="${playerMove}-emoji.png" class="size">
    <img src="${computerMove}-emoji.png" class="size">
    Computer`;

    }
    function updateScore(){
    document.querySelector('.score')
    .innerHTML=`Wins: ${Score.wins},
    Losses: ${Score.loss},Ties: ${Score.Ties}`;
    }
    function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
    }