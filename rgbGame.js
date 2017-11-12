var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColors = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var levelSelected = document.querySelectorAll(".levelSelected");

for(var i = 0; i < levelSelected.length; i++){
levelSelected[i].addEventListener("click", function(){
	levelSelected[0].classList.remove("mode");
	levelSelected[1].classList.remove("mode");
	this.classList.add("mode");
	this.textContent === "Easy" ?  numSquares = 3: numSquares = 6; 
	// if(this.textContent === "Easy"){
	// 	numSquares = 3;
	// } else {
	// 	numSquares = 6;
	// }
});
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColors = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColors;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	// change colors of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";	
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
};

// figure out how many squares to show
// pick new colors
// pick a new pickedColors
// update page to reflect changes


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("mode");
// 	hardBtn.classList.remove("mode");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColors = pickColor();
// 	colorDisplay.textContent = pickedColors;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.background = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("mode");
// 	easyBtn.classList.remove("mode");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColors = pickColor();
// 	for (var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.background = "block";
// 		}
// 	});	


resetButton.addEventListener("click", function(){
	reset();

});

colorDisplay.textContent = pickedColors;

for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of picked square
		var clickedColor = this.style.background;

		// compare color to picked color
		if(clickedColor === pickedColors){
			message.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";

		}

	});
}

function changeColors(color){

	// loop through all squares
	for(var i = 0; i < squares.length; i++){
	// change each color to match given color
	
	squares[i].style.backgroundColor = color;

	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


function generateRandomColors(num){
// make an array
var arr = []
// repeat num times
for(var i = 0; i < num; i++){
	arr.push(randomColor());
	// get random color and push into array
}
// return the array that was made
return arr;

}

function randomColor(){
	// pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + "," + " " + g + "," + " " + b + ")";
}


