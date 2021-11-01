//enter our names and have them displayed
    // 
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser


const statusDisplay = document.querySelector('.game-status');

let gamneStart = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

