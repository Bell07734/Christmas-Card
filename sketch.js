function setup() {
  createCanvas(windowWidth, windowHeight - 5);
}

function draw() {
  background(255);
  noStroke();
  fill(0, 230, 118);

  rect(0, 0, width, 100);


  triangle(width / 2 - 50, height / 2 - 50, width / 2, height / 2 - 150, width / 2 + 50, height / 2 - 50)
  triangle(width / 2 - 100, height / 2 + 75, width / 2, height / 2 - 100, width / 2 + 100, height / 2 + 75)
  triangle(width / 2 - 130, height / 2 + 200, width / 2, height / 2, width / 2 + 130, height / 2 + 200)
  fill("#7d3c0d")
  rect(width / 2 - 25, height / 2 + 200, 50, 50)

  fill(255, 255, 255)
  textSize(48);

  textAlign(CENTER, CENTER);

  text("Merry Christmas!", width / 2, 50);

}