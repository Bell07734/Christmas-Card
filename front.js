let card;
let paper1, paper2;
let currentLocation;
let music;
let counter = 0.0;
let lights;

function preload() {
	music = loadSound("WeWishYouAMerryXmas.mp3");
}

function setup() {
	front = createCanvas(350, 500);
	front.parent("f1");

	if (windowHeight > windowWidth) {
		document.getElementById("credits").style.display = "block";
	}

	card = document.querySelector("#card");
	card.addEventListener("mousedown", cardClicked);

	paper1 = document.querySelector("#p1");
	paper2 = document.querySelector("#p2");

	currentLocation = 1;

	lightLocations = [
		[width / 2, height / 2 - 85],
		[width / 2 + 20, height / 2 - 95],
		[width / 2 - 30, height / 2],
		[width / 2 + 25, height / 2 + 10],
		[width / 2 + 70, height / 2 + 60],
		[width / 2 - 25, height / 2 + 50],
		[width / 2 + 10, height / 2 - 25],
		[width / 2 + 40, height / 2 + 90],
		[width / 2 - 90, height / 2 + 160],
		[width / 2 + 65, height / 2 + 155],
		[width / 2 - 60, height / 2 + 195],
		[width / 2 - 10, height / 2 + 115],
		[width / 2 + 35, height / 2 + 175],
	];

	baubleLocations = [
		[width / 2 - 20, height / 2 - 80],
		[width / 2 + 10, height / 2 - 110],
		[width / 2 - 50, height / 2],
		[width / 2 + 25, height / 2 + 50],
		[width / 2 + 30, height / 2 - 10],
		[width / 2 - 50, height / 2 + 45],
		[width / 2, height / 2 - 45],
		[width / 2 + 10, height / 2 + 90],
		[width / 2 - 75, height / 2 + 150],
		[width / 2 + 55, height / 2 + 135],
		[width / 2 - 35, height / 2 + 190],
		[width / 2 - 30, height / 2 + 105],
		[width / 2 + 15, height / 2 + 175],
	];

	baubles = [];

	for (let location of baubleLocations) {
		baubles.push(new Bauble(location[0], location[1]));
	}

	lights = [];

	for (let location of lightLocations) {
		lights.push(new Light(location[0], location[1]));
	}
}

function draw() {
	counter += deltaTime;
	if (counter > 1000) {
		counter = 0;
	}

	background(255);
	noStroke();
	tree();
	messsage();

	update_baubles();
	update_lights();
}

function update_baubles() {
	for (let bauble of baubles) {
		bauble.draw();
	}
}

function update_lights() {
	for (let i = 0; i < lights.length; i++) {
		light = lights[i];
		if (i % 2 == floor(counter / 500) % 2) {
			light.on();
		} else {
			light.off();
		}
		light.draw();
	}
}

function cardClicked() {
	for (let bauble of baubles) {
		if (bauble.touching_mouse()) {
			bauble.change_colour();
			return;
		}
	}
	if (currentLocation == 1) {
		openCard();
		paper1.classList.add("flipped");
		paper1.style.zindex = 1;
		currentLocation = 2;
		if (!music.isPlaying()) {
			music.play();
		}
	} else if (currentLocation == 2) {
		closeCard();
		paper1.classList.remove("flipped");
		paper1.style.zindex = 2;
		currentLocation = 1;
		if (music.isPlaying()) {
			music.stop();
		}
	}
}

function openCard() {
	if (windowWidth >= 700) {
		card.style.transform = "translateX(50%)";
	} else {
		card.style.transform = "translateX(5%)";
	}
}

function closeCard() {
	card.style.transform = "translateX(0%)";
}

function tree() {
	fill("#6D3D14");
	rect(width / 2 - 25, height / 2 + 200, 50, 50);

	fill("#95E06C");

	triangle(
		width / 2 - 50,
		height / 2 - 50,
		width / 2,
		height / 2 - 150,
		width / 2 + 50,
		height / 2 - 50
	);
	triangle(
		width / 2 - 100,
		height / 2 + 75,
		width / 2,
		height / 2 - 100,
		width / 2 + 100,
		height / 2 + 75
	);
	triangle(
		width / 2 - 130,
		height / 2 + 200,
		width / 2,
		height / 2,
		width / 2 + 130,
		height / 2 + 200
	);
}

function messsage() {
	fill(240);
	textSize(40);
	textFont("Patrick Hand");

	textAlign(RIGHT, TOP);
	text("Click to", 325, 25);
	text("open", 325, 60);
}
