const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = 350;
let y = 300;
let x1 = 500;
let y1 = 600;
let x2 = 100;
let y2 = 200;
let speed2 = 1;
let speed1 = 2;
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(425, 225, 200);

    drawGrid(canvasWidth, canvasHeight);
}


 // clear the canvas:



 // draw the grid (optional -- feel free to remove this line):
 // drawGrid(canvasWidth, canvasHeight);


// replace this function with YOUR creature!

function draw() {
    // clear the canvas:
    

   


    // move the car:

    // redraw the car:

    drawCreature(x, y, 100)
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

    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
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