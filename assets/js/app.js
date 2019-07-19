console.log('connected');

let changeColors = (color) => {
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

let pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// function to generate random rgb
let randomColor = () => {
    // pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256);
    // rgb(r, g, b)
    return `rgb(${r}, ${g}, ${b})`;
}

let generateRandomColors = (num) => {
    // make an array
    let arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

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
            h1.style.backgroundColor = clickedColor;
        } else {
            // alert("WRONG!!!");
            // changes to background color(like a hide) when clicked incorrectly
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });

};

