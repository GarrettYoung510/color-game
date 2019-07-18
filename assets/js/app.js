console.log('connected');

const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
]

let changeColors = (color) => {
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

let pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

let squares = document.querySelectorAll(".square");

const pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function () {

        let clickedColor = this.style.backgroundColor;
        console.log(pickedColor);
        console.log(clickedColor);
        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct! :D (Refresh to restart)"
            changeColors(clickedColor);
        } else {
            // alert("WRONG!!!");
            // changes to background color(like a hide) when clicked incorrectly
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });

};

