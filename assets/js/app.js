let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll(".mode");

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
                modeButtons[0].classList.remove('selected');
                modeButtons[1].classList.remove('selected');
                this.classList.add('selected');
        
                this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
                // if this text content = easy then num squares 3 :else num squares 6
                // turnary operator
        
                reset();
                // figure out how many squares to show
                // pick new colors
                // pick a new pickedColor
                // update page to reflect changes
        
            });
        }
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        // squares[i].style.backgroundColor = colors[i];
    
        // add click listeners to squares
        squares[i].addEventListener('click', function () {
    
            let clickedColor = this.style.backgroundColor;
            console.log(pickedColor);
            console.log(clickedColor);
            if (clickedColor === pickedColor) {
                // alert("Correct!");
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                // alert("WRONG!!!");
                // changes to background color(like a hide) when clicked incorrectly
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    
    }
    
}

function init(){

    // mode button event listners
    setupModeButtons();
    // setup squares
    setupSquares();
    reset();
}

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

function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
    }
}
    h1.style.backgroundColor = "#steelblue";
}

resetButton.addEventListener('click', () => {
    reset();
});

init();