let card;
let paper1, paper2;
let currentLocation;
let music;
let counter = 0.0;
let lights;
let baubles;
let presents;

new p5(function (p5) {
	p5.preload = function () {
		music = new Audio("WeWishYouAMerryXmas.mp3");
	};

	p5.setup = function () {
		front = p5.createCanvas(350, 500);
		front.parent("f1");

		if (p5.windowHeight > p5.windowWidth) {
			document.getElementById("credits").style.display = "block";
		}

		card = document.querySelector("#card");
		card.addEventListener("mousedown", cardClicked);
		card.addEventListener("touch", cardClicked);

		paper1 = document.querySelector("#p1");
		paper2 = document.querySelector("#p2");

		currentLocation = 1;

		lightLocations = [
			[p5.width / 2, p5.height / 2 - 85],
			[p5.width / 2 + 20, p5.height / 2 - 95],
			[p5.width / 2 - 30, p5.height / 2],
			[p5.width / 2 + 25, p5.height / 2 + 10],
			[p5.width / 2 + 70, p5.height / 2 + 60],
			[p5.width / 2 - 25, p5.height / 2 + 50],
			[p5.width / 2 + 10, p5.height / 2 - 25],
			[p5.width / 2 + 40, p5.height / 2 + 90],
			[p5.width / 2 - 90, p5.height / 2 + 160],
			[p5.width / 2 + 65, p5.height / 2 + 155],
			[p5.width / 2 - 60, p5.height / 2 + 195],
			[p5.width / 2 - 10, p5.height / 2 + 115],
			[p5.width / 2 + 35, p5.height / 2 + 175],
		];

		baubleLocations = [
			[p5.width / 2 - 20, p5.height / 2 - 80],
			[p5.width / 2 + 10, p5.height / 2 - 110],
			[p5.width / 2 - 50, p5.height / 2],
			[p5.width / 2 + 25, p5.height / 2 + 50],
			[p5.width / 2 + 30, p5.height / 2 - 10],
			[p5.width / 2 - 50, p5.height / 2 + 45],
			[p5.width / 2, p5.height / 2 - 45],
			[p5.width / 2 + 10, p5.height / 2 + 90],
			[p5.width / 2 - 75, p5.height / 2 + 150],
			[p5.width / 2 + 55, p5.height / 2 + 135],
			[p5.width / 2 - 35, p5.height / 2 + 190],
			[p5.width / 2 - 30, p5.height / 2 + 105],
			[p5.width / 2 + 15, p5.height / 2 + 175],
		];

		baubles = [];

		for (let location of baubleLocations) {
			baubles.push(new Bauble(location[0], location[1]));
		}

		lights = [];

		for (let location of lightLocations) {
			lights.push(new Light(location[0], location[1]));
		}

		presents = [
			new Present(20, p5.height - 60, 70, 60),
			new Present(p5.width - 90, p5.height - 80, 80, 80),
		];
	};

	p5.draw = function () {
		counter += p5.deltaTime;
		if (counter > 1000) {
			counter = 0;
		}

		p5.background(255);
		p5.noStroke();
		tree();
		messsage();

		updateBaubles();
		updateLights();

		drawPresents();
	};

	function updateBaubles() {
		for (let bauble of baubles) {
			bauble.draw();
		}
	}

	function updateLights() {
		for (let i = 0; i < lights.length; i++) {
			light = lights[i];
			if (i % 2 == p5.floor(counter / 500) % 2) {
				light.on();
			} else {
				light.off();
			}
			light.draw();
		}
	}

	function cardClicked() {
		for (let bauble of baubles) {
			if (bauble.touchingMouse()) {
				bauble.changeColour();
				return;
			}
		}
		if (currentLocation == 1) {
			openCard();
			paper1.classList.add("flipped");
			paper1.style.zindex = 1;
			currentLocation = 2;
			music.play();
		} else if (currentLocation == 2) {
			closeCard();
			paper1.classList.remove("flipped");
			paper1.style.zindex = 2;
			currentLocation = 1;
			music.pause();
		}
	}

	function openCard() {
		if (p5.windowWidth >= 700) {
			card.style.transform = "translateX(50%)";
		} else {
			card.style.transform = "translateX(5%)";
		}
	}

	function closeCard() {
		card.style.transform = "translateX(0%)";
	}

	function tree() {
		p5.fill("#6D3D14");
		p5.rect(p5.width / 2 - 25, p5.height / 2 + 200, 50, 50);

		p5.fill("#95E06C");

		p5.triangle(
			p5.width / 2 - 50,
			p5.height / 2 - 50,
			p5.width / 2,
			p5.height / 2 - 150,
			p5.width / 2 + 50,
			p5.height / 2 - 50
		);
		p5.triangle(
			p5.width / 2 - 100,
			p5.height / 2 + 75,
			p5.width / 2,
			p5.height / 2 - 100,
			p5.width / 2 + 100,
			p5.height / 2 + 75
		);
		p5.triangle(
			p5.width / 2 - 130,
			p5.height / 2 + 200,
			p5.width / 2,
			p5.height / 2,
			p5.width / 2 + 130,
			p5.height / 2 + 200
		);

		//STAR
		p5.fill("#ffe81d");
		star(p5.width / 2, p5.height / 2 - 150, 15, 40);
	}

	function messsage() {
		p5.fill(240);
		p5.textSize(40);
		p5.textFont("Patrick Hand");

		p5.textAlign(p5.RIGHT, p5.TOP);
		p5.text("Click to", 325, 25);
		p5.text("open", 325, 60);
	}

	function star(x, y, radius1, radius2) {
		let angle = p5.TWO_PI / 5.0;
		let halfAngle = angle / 2.0;
		p5.beginShape();
		for (let a = 60; a < p5.TWO_PI + 60; a += angle) {
			let sx = x + p5.cos(a) * radius2;
			let sy = y + p5.sin(a) * radius2;
			p5.vertex(sx, sy);
			sx = x + p5.cos(a + halfAngle) * radius1;
			sy = y + p5.sin(a + halfAngle) * radius1;
			p5.vertex(sx, sy);
		}
		p5.endShape(p5.CLOSE);
	}

	function drawPresents() {
		for (let present of presents) {
			present.draw();
		}
	}
	class Present {
		constructor(x, y, width, height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;

			let colours = ["#FFBC42", "#F95738", "#30BCED", "#88498F"];
			this.colour1 = colours.splice(p5.random(0, colours.length), 1);
			this.colour2 = colours.splice(p5.random(0, colours.length), 1);
		}
		draw() {
			p5.fill(this.colour1);
			p5.rect(this.x, this.y, this.width, this.height);
			p5.fill(this.colour2);
			p5.rect(this.x, this.y + this.height / 2 - 5, this.width, 10);
			p5.rect(this.x + this.width / 2 - 5, this.y, 10, this.height);
		}
	}
	class Bauble {
		constructor(x, y) {
			this.colours = [
				"#FFBC42",
				"#F95738",
				"#30BCED",
				"#88498F",
				"#FFBC42",
				"#F95738",
				"#30BCED",
				"#88498F",
			];
			this.colour = p5.random(this.colours);
			this.x = x;
			this.y = y;
			this.isPressed = false;
		}
		draw() {
			p5.fill(this.colour);
			p5.circle(this.x, this.y, 25);
		}
		touchingMouse() {
			if (p5.dist(this.x, this.y, p5.mouseX, p5.mouseY) <= 25) {
				return true;
			}
		}
		changeColour() {
			this.colour = this.colours[this.colours.indexOf(this.colour) + 1];
		}
	}
	class Light {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.colour = "#ffe81d6e";
		}
		draw() {
			p5.fill(this.colour);
			p5.circle(this.x, this.y, 10);
		}
		on() {
			this.colour = "#ffe81d";
		}
		off() {
			this.colour = "#ffe81d6e";
		}
	}
});
