class Bauble {
    constructor(x, y) {
        this.colours = ["#FFBC42", "#F95738", "#30BCED", "#88498F", "#FFBC42", "#F95738", "#30BCED", "#88498F"]
        this.colour = random(this.colours)
        this.x = x
        this.y = y
        this.isPressed = false
    }
    draw() {
        fill(this.colour)
        circle(this.x, this.y, 25)
    }
    clicked() {
        if (mouseIsPressed && dist(this.x, this.y, mouseX, mouseY) <= 25) {
            if (!this.isPressed) {
                this.isPressed = true
                return true
            } else {
                return false
            }
        } else {
            this.isPressed = false
            return false
        }
    }
    change_colour() {
        this.colour = this.colours[this.colours.indexOf(this.colour) + 1]
    }
}