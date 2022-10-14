// "use strict";




// To load board 
window.onload = gameboard;



function gameboard(){
    

    const x_o_board= document.getElementById("board");
    for (let n = 0; n < 9; n++) {
        x_o_board.children[n].classList.add("square"); 
        // console.log(x_o_board);
        // console.log(x_o_board.children[n]);
        x_o_board.children[n].addEventListener('hover', hovering, {once: true});
        x_o_board.children[n].addEventListener('click', clickMark, {once: true});
        // x_o_board.children[n].classList.add("hover");
        
        
    }

    

// Making a mark 

//board= document.getElementById("board").children;

// x_o_board.onmouseover= function() {hovering()};
// x_o_board.onmouseover= function() {removeHover()};

const x_team = 'x';
const o_team = 'o';
const gamestate= [];
let O

// to remove
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
    hovering()
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

function hovering(e){
    // x_o_board.classList.remove(x_team);
    // x_o_board.classList.remove(o_team);
    // if(!O & !X){
    for (let n = 0; n < 9; n++) {
        x_o_board.children[n].onmouseover= function(){
            x_o_board.children[n].classList.add('hover');
        };
         x_o_board.children[n].onmouseout= function(){
            x_o_board.children[n].classList.remove('hover');
         }
       
    // } else {
        //const square= e.target;
        // square.classList.add("hover")
    //     x_o_board.classList.remove("hover")
    }
}
    
// function removeHover(){
//      x_o_board.classList.remove("hover")
//      console.log("remved")
// }   
    
}
