function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noStroke();
  fill(0, 230, 118);
  rect(0, 0, width, height/10);
  triangle(width/2, height/4, 0.4*width, height/3, 0.6 * width, height/3);
  triangle(width/2, height/3.5, 0.35*width, height/2.5, 0.65 * width, height/2.5);
  triangle(width/2, height/3, 0.3*width, height/2, 0.7 * width, height/2);
  triangle(width/2, height/2.75, 0.225*width, height/1.5, 0.775 * width, height/1.5);
  fill("#916714");
  rect(0.4*width, height/1.5, width/5, height/10);
  fill(255, 255, 255);
  textSize(height/20);
  textAlign(CENTER, CENTER);
  text("Merry Christmas!", width / 2, height/20);
}