let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-game");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector('p');


let player1Turn = true; //suppose let the playing player be player 1 and player 2

let winPattern = [
    [0,1,2],
    [2,1,0],
    [3,4,5],
    [5,4,3],
    [6,7,8],
    [8,7,6],
    [0,3,6],
    [6,3,0],
    [1,4,7],
    [7,4,1],
    [2,5,8],
    [8,5,2],
    [0,4,8],
    [8,4,0],
    [2,4,6],
    [6,4,2]
];

const resetGame = () =>{
    player1Turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};






boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if (player1Turn === true){
            box.innerText = "O";
            player1Turn = false;    
        }else{
            box.innerText ="X";
            player1Turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
let disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
};

let enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};



const showWinner = (winner) =>{
    msg.innerHTML = `${winner} hi Kehdeeee!`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};


const checkWinner = () =>{
    for (let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("wahh re sherr" , pos1Val);
            showWinner(pos1Val);
        }
    }
    }
}
resetBtn.addEventListener("click" , resetGame);

