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

    let X_or_O = '';

    let stat =  document.getElementById('status');
    let O;
    const x_o_board = document.getElementById("board");
    const newGameButton = document.getElementsByClassName("btn");

        O = false
        for (let n = 0; n < 9; n++) {
            x_o_board.children[n].classList.add("square"); 
            console.log(x_o_board);
            console.log(x_o_board.children[n]);
            x_o_board.children[n].addEventListener('click', clickMark, {once: true});
            hovering();
            
    }

// reset();


//reset();

// Making a mark 

//board= document.getElementById("board").children;

// x_o_board.onmouseover= function() {hovering()};
// x_o_board.onmouseover= function() {removeHover()};



// to remove
console.log(x_o_board);

newGameButton[0].addEventListener('click', restart); 


function clickMark(e) {
    console.log("before");
    const square = e.target;
    X_or_O = O ? o_team : x_team;
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
    resizeTo(square, X_or_O)
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

function restart(){
    O= false
    const squares=  document.querySelectorAll('[square]');
    console.log(squares);
   // squares.forEach(box => {
    for (let n = 0; n < 9; n++) {
        squares[n].classList.remove(x_team)
        squares[n].classList.remove(o_team)
        squares[n].removeEventListener('click', clickMark)
        squares[n].addEventListener('click', clickMark, {once: true});
    }
    hovering();
    //
    
    //     x_o_board.children[n].classList.remove(o_team)
    //     x_o_board.children[n].classList.remove(x_team)
    //     // square.innerHTML = ""
    //     x_o_board.children[n].removeEventListener('click', clickMark)
    // }


    // console.log(X_or_O);
    // square.classList.remove(X_or_O)
    // if (X_or_O.length > 0){
    //     //square.innerHTML = ""
    //     x_o_board.classList.remove(x_team);
    //     x_o_board.classList.remove(o_team);
    // }
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
