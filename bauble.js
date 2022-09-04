class Bauble {
    constructor(x, y) {
        this.colours = ["#FFBC42", "#F95738", "#30BCED", "#88498F"]
        this.colour = random(this.colours)
        fill(this.colour)
        circle(x, y, 25)
    }
}