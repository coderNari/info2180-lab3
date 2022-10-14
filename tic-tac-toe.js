"use strict";

// To load board 
window.onload = gameboard;

// const game= document.getElementById("game");

function gameboard(){
    board= document.getElementById("board").children;
    for (let n = 0; n < 10; n++) {
        board[n].setAttribute("class", "square"); 
    }
}



// const list = document.getElementById("game").classList;
// let squares= document.querySelectorAll(".square");
