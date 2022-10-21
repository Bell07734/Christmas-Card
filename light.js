class Light {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.colour = "#ffe81d6e";
	}
	draw() {
		fill(this.colour);
		circle(this.x, this.y, 10);
	}
	on() {
		this.colour = "#ffe81d";
	}
	off() {
		this.colour = "#ffe81d6e";
	}
}
