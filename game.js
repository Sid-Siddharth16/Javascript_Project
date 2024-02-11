let boxes = document.querySelectorAll(".btn-box");
let msgBtn = document.querySelector(".win-msg");
let resetBtn = document.querySelector("#reset-btn")
let turn0 = true;
let click = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// disabling All Boxes After Winning
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};

// Main Logic
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turn0){
            box.classList.add("btnO");
            box.innerText = "O";
            box.classList.remove("btnO"); 
            turn0 = false;
        }else{
            box.classList.add("btnX");
            box.innerText = "X";
            box.classList.remove("btnX");
            turn0 = true;
        }
        box.disabled = true;
        click++;
        checkWinner();
        if(click === 9 && !checkWinner()){
            drawMsg();
        }
    })
})

// Showing Winner
const showWinner = (winner) => {
    msgBtn.innerText = "Congrats Winner is " + winner;
    msgBtn.classList.remove("hide");
    disableBoxes();
};

// Winner Checking
const checkWinner = () => {
    for(let pat of winPattern){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                click.remove = true;
                showWinner(pos1);
                return true;
            }
        }
    }
};

// Draw Logic Msg 
const drawMsg = () => {
    msgBtn.innerText = "oops! match is DRAW!!! ";
    msgBtn.classList.remove("hide");
};

// Reset Game
const resetfun = () => {
    turn0 = true;
    click = 0;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgBtn.classList.add("hide");
};

// Reset Button
resetBtn.addEventListener("click" , () => {
    resetfun();
})
