function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noStroke();
  fill(0, 230, 118);
  rect(0, 0, width, 100);
  fill(255, 255, 255);
  textSize(48);
  textAlign(CENTER, CENTER)
  text("Merry Christmas!", width / 2, 50)
}