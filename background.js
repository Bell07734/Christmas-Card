new p5(function (p5) {
	let snowflakes = [];
	p5.setup = function () {
		bg = p5.createCanvas(p5.windowWidth, p5.windowHeight);
		bg.parent("bg");
	};

	p5.draw = function () {
		p5.background("#091540");
		p5.noStroke();

		let t = p5.frameCount / 60;
		for (let i = 0; i < p5.random(3); i++) {
			snowflakes.push(new Snowflake());
		}
		for (snowflake of snowflakes) {
			snowflake.update(t);
		}
	};

	function Snowflake() {
		this.posX = 0;
		this.posY = p5.random(-50, 0);
		this.initialangle = p5.random(0, 2 * p5.PI);
		this.size = p5.random(2, 5);
		this.transparency = p5.random(100, 255);

		this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));

		this.update = function (time) {
			let w = 0.6;
			let angle = w * time + this.initialangle;
			this.posX = p5.width / 2 + this.radius * p5.sin(angle);

			this.posY += p5.pow(this.size, 0.5);

			if (this.posY > p5.height) {
				let index = snowflakes.indexOf(this);
				snowflakes.splice(index, 1);
			}
			p5.fill(255, 255, 255, this.transparency);
			p5.ellipse(this.posX, this.posY, this.size);
		};
	}
});
