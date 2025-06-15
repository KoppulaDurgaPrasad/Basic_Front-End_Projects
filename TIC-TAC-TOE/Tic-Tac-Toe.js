const boxes = document.querySelectorAll(".Box");
const resetBtn = document.querySelector(".Reset");
const msg = document.querySelector(".msg");
let turn = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            if (turn) {
                box.textContent = "X";
                box.style.backgroundColor = "rgba(255, 99, 132, 0.6)"; 
            } else {
                box.textContent = "O";
                box.style.backgroundColor = "rgba(54, 162, 235, 0.6)"; 
            }
            box.style.pointerEvents = "none"; 
            turn = !turn;
            checkWinner();
        }
    });
});


function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            msg.innerHTML = `🎉 Congratulations! <span style="color: rgba(255, 99, 132, 1);">${pos1}</span> wins!`;
            highlightWinner(pattern);
            disableAllBoxes();
            return;
        }
    }

    
    if ([...boxes].every(box => box.textContent !== "")) {
        msg.textContent = "It's a draw!";
    }
}


function highlightWinner(pattern) {
    pattern.forEach(index => {
        boxes[index].style.backgroundColor = "rgba(75, 192, 192, 0.8)"; 
    });
}


function disableAllBoxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}


resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.style.backgroundColor = "rgba(100, 149, 237, 0.2)"; 
        box.style.pointerEvents = "auto";
    });
    turn = true;
    msg.textContent = "Play, Win, Repeat";
});
