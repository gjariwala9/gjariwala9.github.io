var numSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay =document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton =document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode buttons event listeners
	for(var i=0; i< modeButtons.length;i++){
			modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			}
			else
			{
				messageDisplay.textContent ="Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function reset(){
	//generate all new color
	colors =generateRandomColor(numSquare);
	//pick a new random color
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color";
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});



function changeColor(color)
{
	//loop through all squares
	for(var i=0; i< squares.length; i++)
	{
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];

	//repeat num times
	for(var i=0;i< num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//red 0-255
	var r = Math.floor(Math.random() * 256);
	//green 0-255
	var g = Math.floor(Math.random() * 256);
	//blue 0-255
	var b = Math.floor(Math.random() * 256);
	//return color
	return "rgb(" + r + ", " + g + ", " + b +")";
}










