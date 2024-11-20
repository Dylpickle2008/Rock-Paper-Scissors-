const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']

        
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                
                winner(this.innerText, computerChoice)

                
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }
    
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                document.body.style.cursor = "url(mouse1.png), pointer"
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won'
                playerScore++;
                document.body.style.cursor = "url(https://atlas-content-cdn.pixelsquid.com/stock-images/rock-stone-AvXzl49-600.jpg), pointer"
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                document.body.style.cursor = "url(https://t4.ftcdn.net/jpg/02/55/26/63/360_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg), pointer"
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                document.body.style.cursor = "url(https://t4.ftcdn.net/jpg/02/55/26/63/360_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg), pointer"
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                document.body.style.cursor = "url(https://www.citypng.com/public/uploads/preview/white-real-notebook-paper-hd-png-704081695123320tm706b00aj.png), pointer"
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                document.body.style.cursor = "url(https://www.citypng.com/public/uploads/preview/white-real-notebook-paper-hd-png-704081695123320tm706b00aj.png), pointer"
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    
    playGame();

}
game();
