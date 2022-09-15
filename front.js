let card
let paper1, paper2
let currentLocation

function setup() {
  front = createCanvas(350, 500);
  front.parent("f1")

  card = document.querySelector("#card");
  card.addEventListener("click", cardClicked)

  paper1 = document.querySelector("#p1");
  paper2 = document.querySelector("#p2");

  currentLocation = 1;

  background(255);
  noStroke();

  fill("#6D3D14")
  rect(width / 2 - 25, height / 2 + 200, 50, 50)

  fill("#95E06C");

  triangle(width / 2 - 50, height / 2 - 50, width / 2, height / 2 - 150, width / 2 + 50, height / 2 - 50)
  triangle(width / 2 - 100, height / 2 + 75, width / 2, height / 2 - 100, width / 2 + 100, height / 2 + 75)
  triangle(width / 2 - 130, height / 2 + 200, width / 2, height / 2, width / 2 + 130, height / 2 + 200)

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

  baubles = []

  for (let location of locations) {
    baubles.push(new Bauble(location[0], location[1]))
  }

  fill(240);
  textSize(40);
  textFont("Patrick Hand")

  textAlign(RIGHT, TOP);
  text("Click to", 325, 25)
  text("open", 325, 60)
}

function draw() {
  update_baubles()
}

function update_baubles() {
  for (let bauble of baubles) {
    bauble.draw()
  }
}

function cardClicked() {
  for (let bauble of baubles) {
    if (bauble.touching_mouse()) {
      bauble.change_colour()
      return
    }
  }
  if (currentLocation == 1) {
    openCard()
    paper1.classList.add("flipped")
    paper1.style.zindex = 1
    currentLocation = 2
  } else if (currentLocation == 2) {
    closeCard()
    paper1.classList.remove("flipped")
    paper1.style.zindex = 2
    currentLocation = 1
  }
}

function openCard() {
  if (windowWidth >= 700) {
    card.style.transform = "translateX(50%)"
  } else {
    card.style.transform = "translateX(10%)"
  }
}

function closeCard() {
  card.style.transform = "translateX(0%)"
}