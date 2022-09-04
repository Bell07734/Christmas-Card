function setup() {
  createCanvas(windowWidth, windowHeight - 5);

  background(255);
  noStroke();

  fill("#6D3D14")
  rect(width / 2 - 25, height / 2 + 200, 50, 50)

  fill("#95E06C");
  rect(0, 0, width, 100);

  triangle(width / 2 - 50, height / 2 - 50, width / 2, height / 2 - 150, width / 2 + 50, height / 2 - 50)
  triangle(width / 2 - 100, height / 2 + 75, width / 2, height / 2 - 100, width / 2 + 100, height / 2 + 75)
  triangle(width / 2 - 130, height / 2 + 200, width / 2, height / 2, width / 2 + 130, height / 2 + 200)

  colours = ["#FFBC42", "#F95738", "#30BCED", "#88498F"]
  locations = [
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
    [width / 2 + 15, height / 2 + 175]
  ]

  for (let location of locations) {
    new Bauble(location[0], location[1])
  }

  // fill(random(colours))
  // circle(width / 2 - 20, height / 2 - 80, 25)
  // fill(random(colours))
  // circle(width / 2 + 10, height / 2 - 110, 25)

  // fill(random(colours))
  // circle(width / 2 - 50, height / 2, 25)
  // fill(random(colours))
  // circle(width / 2 + 25, height / 2 + 50, 25)
  // fill(random(colours))
  // circle(width / 2 + 30, height / 2 - 10, 25)
  // fill(random(colours))
  // circle(width / 2 - 50, height / 2 + 45, 25)
  // fill(random(colours))
  // circle(width / 2, height / 2 - 45, 25)

  // fill(random(colours))
  // circle(width / 2 + 10, height / 2 + 90, 25)
  // fill(random(colours))
  // circle(width / 2 - 75, height / 2 + 150, 25)
  // fill(random(colours))
  // circle(width / 2 + 55, height / 2 + 135, 25)
  // fill(random(colours))
  // circle(width / 2 - 35, height / 2 + 190, 25)
  // fill(random(colours))
  // circle(width / 2 - 30, height / 2 + 105, 25)
  // fill(random(colours))
  // circle(width / 2 + 15, height / 2 + 175, 25)


  fill(255, 255, 255)
  textSize(48);

  textAlign(CENTER, CENTER);

  text("Merry Christmas!", width / 2, 50);

}

function draw() {

}