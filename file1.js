let boxes = document.querySelectorAll(".box");  // sabhi 9 boxes ka aray 

let resetBtn = document.querySelector("#reset");
let newGameBTN = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true ; 

const winPatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8], 
    [2,4,6], 
    [3,4,5], 
    [6,7,8]


];


const resetGame = () => {

    turnO = true ; 
    enableBoxes() ; 
    msgContainer.classList.add( "hide");
};



let count =0; 
boxes.forEach((box) => {


    box.addEventListener( "click" , () => {
         count++;

        console.log("box was clicked");

        if  ( turnO=== true  ){

             box.innerText = "O";
            turnO=false ;

        }

        else {
            box.innerText = "X";
            turnO=true  ;


        }

        box.disabled = true ; 

        checkWinner(count);

    });


}); 
 

const checkWinner = (count) => {

    for ( pattern of winPatterns ) {

        // console.log(boxes[pattern[0]].innerText ,boxes[pattern[1]].innerText  , boxes[pattern[2]].innerText );
        // console.log([pattern[0]] ,[pattern[1]] , [pattern[2]]);

        let pos1Val = boxes[pattern[0]].innerText ; 
        let pos2Val = boxes[pattern[1]].innerText ; 
        let pos3Val = boxes[pattern[2]].innerText ; 

        if ( pos1Val !="" && pos2Val!="" && pos3Val!=""){

            if ( pos1Val===pos2Val && pos3Val===pos2Val){
                console.log(
                    "winner", pos1Val
                );

                showWinner(pos1Val);
            }
        }

        else if ( count===9) {
            msgContainer.classList.remove("hide");
            msg.innerText="draw , nobody won";
        }
    }
    };  

    const showWinner = (winner) => {

        msg.innerText= `congratulations, the winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disabBoxes();

    };

    const disabBoxes = () => {

        for ( let box of boxes) {

            box.disabled = true ;
        }
    };

    const enableBoxes = () => {

        for ( let box of boxes ) {

            box.disabled = false ; 
            box.innerText = "";
        }
    };

    newGameBTN.addEventListener("click" , resetGame);

    resetBtn.addEventListener("click" , resetGame);