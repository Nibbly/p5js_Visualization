var canvHeight = 400;
var canvWidth = 600;
var posX = 0;
var posY = 0;
var shuffledArray = [47, 46, 63, 59, 55, 11, 53, 20, 8, 73, 17, 39, 79, 96, 50, 16, 33, 84, 54, 76, 74, 36, 44, 31, 19, 42, 93, 15, 65, 90, 89, 4, 28, 30, 71, 51, 6, 7, 91, 72];
var i = 0;
var j = 1;
var indexSorted = 0;


function setup() {
	createCanvas(canvWidth, canvHeight);
	frameRate(20);
}

function draw() {
	background(70, 70, 70);
	stroke(color(0, 0, 0))
	strokeWeight(2);

	DrawArrayOfRectangles(shuffledArray, i, j);

	console.log("Beginning of draw: ", shuffledArray);
	console.log("i:", i, "j:", j)

	if (shuffledArray[i] > shuffledArray[j]) {
		console.log("Vor Swap");
		shuffledArray = Swap(shuffledArray, i, j);
		console.log("Nach Swap");
	}

	if (i < shuffledArray.length) {
		j = j + 1;
		if (j >= shuffledArray.length - indexSorted) {
			j = 1;
			i = -1;
			indexSorted = indexSorted + 1;
		}
	}

	i++;

	console.log("End of draw: ", shuffledArray);
}

function mousePressed() {
	/* i++;
	draw(); */
}

function Swap(arguments, i, j) {
	var array = arguments;

	valueHolder = array[j];
	array[j] = array[i];
	array[i] = valueHolder;

	console.log("Index ", i, " - Value: ", array[i], "Index ", j, " - Value: ", array[j])

	return array;
}


function DrawArrayOfRectangles(arguments, first, second) {
	var array = arguments;
	widthOfRec = canvWidth / array.length;

	recwidth = 0;

	for (var i = 0; i < array.length; i++) {
		if (i == first) {
			fill(color(255, 0, 0))
		} else if (i == second) {
			fill(color(0, 255, 0))
		}
		else {
			fill(color(200, 200, 200));
		}

		rect(i * (canvWidth / array.length), canvHeight - array[i] * 4, canvWidth / array.length, array[i] * 50);
		recwidth += widthOfRec;
	}
}
