let opa = "OPA";
let lab = "Lab";
let fontSize = 100;
let amplitude = 20; // גובה הגל
let frequency = 0.07; // תדירות הגל
let x, y;
let fontopa, fontlab;

function preload() {
  fontopa = loadFont("EditorSans_PRO-BlackItalic.otf");
  fontlab = loadFont("EditorSans-Light.otf");
}

function setup() {
  createCanvas(500, 300);
  textSize(fontSize);
  textAlign(LEFT, CENTER); // מיקום לפי האות הראשונה בצד שמאל
  x = width / 2;
  y = height / 2; 
}

function draw() {
  background(255);
  let mouseOverOPA = mouseX > x - textWidth(opa) / 2 && mouseX < x + textWidth(opa) / 2 && mouseY > y - fontSize / 2 && mouseY < y + fontSize / 2;

  let letterX = x - (textWidth(opa) + textWidth(lab)) / 2;

  // ציור "OPA"
  textFont(fontopa);
  for (let i = 0; i < opa.length; i++) {
    let offset = 0;
    if (mouseOverOPA) {
      offset = sin((frameCount + i * 10) * frequency) * amplitude;
    }
    fill(0);
    text(opa[i], letterX, y + offset);
    letterX += textWidth(opa[i]); // הזזת האות הבאה לפי רוחב האות הנוכחית
  }

  // ציור "Lab"
  textFont(fontlab);
  for (let i = 0; i < lab.length; i++) {
    let offset = 0;
    if (mouseOverOPA) { // או הגדרת תנאי חדש אם רוצים גם תגובה ל-Lab
      offset = sin((frameCount + (i + opa.length) * 10) * frequency) * amplitude;
    }
    fill(0);
    text(lab[i], letterX, y + offset);
    letterX += textWidth(lab[i]); // הזזת האות הבאה לפי רוחב האות הנוכחית
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}
