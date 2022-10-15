// "use strict";




// To load board 
window.onload = gameboard;



function gameboard(){

    const x_team = 'X';
    const o_team = 'O';
    const winValues= [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    let stat=  document.getElementById('status');
    
    let O
    


    const x_o_board= document.getElementById("board");
    O= false
    for (let n = 0; n < 9; n++) {
        x_o_board.children[n].classList.add("square"); 
        console.log(x_o_board);
        console.log(x_o_board.children[n]);
    //    x_o_board.children[n].addEventListener('hover', hovering, {once: true});
        x_o_board.children[n].addEventListener('click', clickMark, {once: true});
        hovering();
    }


// Making a mark 

//board= document.getElementById("board").children;

// x_o_board.onmouseover= function() {hovering()};
// x_o_board.onmouseover= function() {removeHover()};



// to remove
console.log(x_o_board);



function clickMark(e) {
    console.log("before");
    const square = e.target;
    const X_or_O = O ? o_team : x_team;
    mark(square, X_or_O);
    if (winnerCheck(X_or_O)){
        // WORKING 
        if (X_or_O == o_team ){
            stat.classList.add('you-won');
            stat.innerHTML= 'Congratulations! O is the Winner!';
        }
        else {
            stat.classList.add('you-won');
            stat.innerHTML= 'Congratulations! X is the Winner!';
        }
        
     }
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

function hovering(){
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
    }
}

function winnerCheck(X_or_O){
    return winValues.some(combination => {
        return combination.every(index => {
            return x_o_board.children[index].classList.contains(X_or_O)
        })
    })
}
    


}
