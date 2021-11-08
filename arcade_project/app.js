//enter our names and have them displayed
    //need a function that displays a prompt for users to enter their name then saves that player with the corresponding letter. Either X or O.
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser


const statusDisplay = document.querySelector('.status');

let gameStart = true;
let currentPlayer = "X";
let player1;
let player2;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `Player: ${currentPlayer} has won! Congratulations! Press the button (Restart Game) to play again.`;
const drawMessage = () => `Game has ended in a draw! Press the button (Restart Game) to play again.`;
const playerTurn = () => `It's ${currentPlayer}'s turn!`;

statusDisplay.innerHTML = playerTurn();

const winningState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function playedCell(cellClicked, cellClickedIdx){
    gameState[cellClickedIdx] = currentPlayer;
    cellClicked.innerHTML = currentPlayer;
}

function playerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = playerTurn();
}


function winHandler(){
    let gameWon = false;
    for(let i = 0; i <= 8; i++){
        const winState = winningState[i];
        let win0 = gameState[winState[0]];
        let win1 = gameState[winState[1]];
        let win2 = gameState[winState[2]];

        if(win0 === "" || win1 === "" || win2 === ""){
            continue;
        }
        
        if(win0 === win1 && win1 === win2 ){
            gameWon = true;
            break;
        }
        
    }
    if(gameWon){
        statusDisplay.innerHTML = winMessage();
        gameStart = false;
        return;
    }
    let gameDraw = !gameState.includes("");
    if(gameDraw){
        statusDisplay.innerHTML = drawMessage();
        gameStart = false;
        return;
    }
    playerChange();
}

function clickedCell(cellClickedEvent){
    const cellClicked = cellClickedEvent.target;
    const cellClickedIdx = parseInt(cellClicked.getAttribute('data-cell-index'));

    if(gameState[cellClickedIdx] !== "" || !gameStart){
        return;
    }

    playedCell(cellClicked, cellClickedIdx);
    winHandler();

}

function gameRestart(){
    gameStart = false;
    currentPlayer = "X"
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = playerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', clickedCell));
document.querySelector('.restart').addEventListener('click', gameRestart);

