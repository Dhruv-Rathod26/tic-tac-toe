let box = document.querySelectorAll(".btn");
let resett = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let valueo = true;


let winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

box.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if (valueo) {
            boxes.innerText = "o";
            valueo = false;

        } else {
            boxes.innerText = "x"
            valueo = true;
        }
        boxes.disabled = true;

        checkwinner();
        checkDraw()
    })

});


const disableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = true;
    }
};


const enableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";
    }
};

const resetgame = () => {
    valueo = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner = () => {
    for (let win of winner) {
        let valu1 = box[win[0]].innerText;
        let valu2 = box[win[1]].innerText;
        let valu3 = box[win[2]].innerText

        if (valu1 != "" && valu2 != "" && valu3 != "") {
            if (valu1 === valu2 && valu2 === valu3) {
                console.log("winner");

                let valu1 = box[win[0]].innerText;
                showWinner(valu1);
            }
        }
    }
}

const checkDraw = () => {
    let isDraw = true;
    for (let boxes of box) {
        if (boxes.innerText === "") {
            isDraw = false;

        }
    }

    if (isDraw) {
        msg.innerText = "Match is Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};


newGameBtn.addEventListener("click", resetgame);
resett.addEventListener("click", resetgame);