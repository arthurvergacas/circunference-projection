var mainBall;
mainCircleRadius = 200;

var pointsSlider;

var mainCheckbox;

var lineCheckbox;

var circleCheckbox;

var numOfPoints;

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.parent("sketch_holder");
	
	pointsSlider = createSlider(1, 20, 2, 1);

	mainCheckbox = createCheckbox("Show white ball", false);

	lineCheckbox = createCheckbox("Show axis", false);

	circleCheckbox = createCheckbox("Show circunference", false);


	mainBall = new MainBall(0, mainCircleRadius);

	

}

function draw() {
	background(0);
	angleMode(DEGREES);

	frameRate(60);

	numOfPoints = pointsSlider.value();

	translate(width/2, height/2);

	if (mainCheckbox.checked()) {
		mainBall.show();
	}
	mainBall.update();



	fill(255, 0, 0);


	for (let i = 0; i < numOfPoints; i++){
		let angle = degrees(PI/numOfPoints * (i + 1));

		if (lineCheckbox.checked()){
			strokeWeight(0.5);
			stroke(255);
			let linePos = getAxis(angle);
			line(linePos[0].x, linePos[0].y, linePos[1].x, linePos[1].y,)
		}

		

	}

	for (let i = 0; i < numOfPoints; i++){
		let angle = degrees(PI/numOfPoints * (i + 1));

		noStroke();
		let pos = getPosition(angle);
		ellipse(pos.x, pos.y, 10);

	}


	if (circleCheckbox.checked()){
		noFill();
		strokeWeight(1);
		stroke(255);

		ellipse(0, 0, mainCircleRadius * 2);
	}

	
}


function getPosition(angleInput) {
	let originalAngle = angleInput;
	let mainAngle = mainBall.pos.heading();
	let angle = mainAngle - originalAngle;;
	
	let magnitude = cos(angle) * mainCircleRadius;

	let x = cos(originalAngle) * magnitude;
	let y = sin(originalAngle) * magnitude;


	return createVector(x, y);
}

function getAxis(angleInput) {
	let angle = angleInput;
	let oppositeAngle = angleInput + 180;

	let x1 = cos(angle) * mainCircleRadius;
	let y1 = sin(angle) * mainCircleRadius;

	let x2 = cos(oppositeAngle) * mainCircleRadius;
	let y2 = sin(oppositeAngle) * mainCircleRadius;

	return [createVector(x1, y1), createVector(x2, y2)]

}



