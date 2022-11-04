const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = 300;
let y = 300;
let size = 300;
let color1 = 'blue';
let color2 = 'red';

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCircle();

    // function invocations goes here:
    drawShape(100, 100, 100, 'pink', 'red');
    drawShape(600, 600, 100, 'blue', 'black');
    drawShape(300, 300, 150, 'orange', 'teal');
    drawShape(400, 400, 200, 'green', 'yellow');
    
    



    drawGrid(canvasWidth, canvasHeight);
}

function drawCircle() {
    fill('red');
    circle(x, y, size, color2);

    fill('blue')
    circle(x, y, size / 2, color1);
}

function drawShape(centerX, centerY, size, fillcolor1, fillcolor2) {
    fill(fillcolor1);
    circle(centerX, centerY, size);
    fill(fillcolor2)
    circle(centerX, centerY, size / 2)
}


// function definition goes here:
