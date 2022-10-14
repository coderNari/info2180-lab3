// "use strict";




// To load board 
window.onload = gameboard;



function gameboard(){
    const x_o_board= document.getElementById("board");
    for (let n = 0; n < 9; n++) {
        x_o_board.children[n].classList.add("square"); 
        // console.log(x_o_board);
        // console.log(x_o_board.children[n]);
        x_o_board.children[n].addEventListener('click', clickMark, {once: true});
        
    }



// Making a mark 

//board= document.getElementById("board").children;

const x_team = 'x';
const o_team = 'o';
const gamestate= [];
let O

console.log(x_o_board);

// x_o_board.forEach(square=> {
    // console.log("before");
    // square.addEventListener('click', clickMark, {once: true});
    // square.addEventListener('click', clickMark );
//     console.log("clicked");
// // });


function clickMark(e) {
    console.log("before");
    const square = e.target
    const X_or_O = O ? o_team : x_team
    mark(square, X_or_O)
    turns()
}

function mark(square, X_or_O){
    square.classList.add(X_or_O)
    if (X_or_O == x_team){
        square.classList.add("X")
        square.innerHTML = "X"
    } else{
        square.classList.add("O")
        square.innerHTML= "O"
    }
}

function turns(){
    O= !O
}
}


