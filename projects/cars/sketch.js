const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: canvasHeight - 50,
    width: 200,
    speed: 0.2,
    color: 'hotpink'
};

let x = 350;
let y = 300;
let x1 = 500;
let y1 = 600;
let x2 = 100;
let y2 = 200;
let speed2 = 1;
let speed1 = 2;
let bubbles = [];
let landscapeImage;

function preload() {
    landscapeImage = loadImage('assets/farm.jpg')
}

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    push();
    const heightRatio = landscapeImage.height / canvasHeight;
    const widthRatio = landscapeImage.width / canvasWidth;
    const scaleFactor = 1 / Math.min(heightRatio, widthRatio);
    scale(scaleFactor);
    image(landscapeImage, 0, 0);
    pop();

}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    push();
    const heightRatio = landscapeImage.height / canvasHeight;
    const widthRatio = landscapeImage.width / canvasWidth;
    const scaleFactor = 1 / Math.min(heightRatio, widthRatio);
    scale(scaleFactor);
    image(landscapeImage, 0, 0);
    pop();

    // move the car:
    c1.x += c1.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);

    drawTree(100, 300, 500);
    drawTree(200, 200, 500);
    drawTree(300, 300, 700);
    drawTree(800, 500, 400);
    drawTree(650, 500, 550);
    drawTree(1000, 500, 500);
    drawTree(1500, 450, 700);
    drawTree(1350, 200, 550);
    drawTree(900, 300, 500);

    drawCreature(x, y, 100)
    drawCreature(x1, y1, 100)
    drawCreature(x2, y2, 50)
    y2 += speed2;
    x1 += speed1;

    if (y2 >= canvasHeight) {
        speed2 = -1;
    }

    if (y2 <= 0) {
        speed2 = 1;
    }
    

    if (x1 >= canvasWidth) {
        speed1 = -2;
    }

    if (x1 <= 0) {
        speed1 = 2;
    }

    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
    }


    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

function drawTree (centerX, centerY, size) {
    // leaves
    strokeWeight(5);
    stroke('teal');
    fill('green');
    beginShape();
    vertex(centerX - size / 6, centerY + size / 6);
    vertex(centerX, centerY);
    vertex(centerX + size / 6, centerY + size / 6);
    endShape(CLOSE);

    // vertex(100, 350);
    // vertex(150, 300);
    // vertex(200, 350);

    // stem 
    strokeWeight(5);
    stroke('black');
    fill('black')
    rect(centerX - size / 30, centerY + size / 10, size / 15, size / 2);
}

function drawCreature(centerX, centerY, size, faceColor='pink') {
    fill(faceColor);
    circle(centerX, centerY, size);
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);
    circle(centerX + sf, centerY - sf, sf);


    fill('pink');
    strokeWeight(1);
    circle(centerX, centerY, sf + 5)
    

    fill('red');
    strokeWeight(5);
    circle(centerX - size / 2, centerY - size / 4, size / 4)
    circle(centerX + size / 2, centerY - size / 4, size / 4)
    

    strokeWeight(size / 35);

    fill('black');
    stroke('black');
    curve(
        centerX - sf*2, centerY - 1.5*size, // control point with small y-coordinate (which bends the curve down from the left)
        centerX - sf*2, centerY + 0.8 * sf, // start point
        centerX + sf*2, centerY + 0.8 * sf, // end point
        centerX + sf*2, centerY - 1.5*size  // control point with small y-coordinate (which bends the curve down from the right)
    );

    
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        shoot();
    } 
    
}

document.addEventListener('keydown', moveController);

function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}