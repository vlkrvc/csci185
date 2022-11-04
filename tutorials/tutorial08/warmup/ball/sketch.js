const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';

function draw() {
    console.log('redrawing the screen');
    // frameRate(4);
    clear();

    if (x >= 500 - width/2) {
        speed *= -1;
        //width += 4;
    } else if (x <= 150 + width/2) {
        speed *=-1;
        //width += 4;
    }




    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight); //left wall
    rect(500, 0, 50, canvasHeight); // right wall 

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, 50);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}

const ChangeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        color = 'red';
    } else if (ev.code == 'KeyP') {
        color = 'purple';
    } else if (ev.code == 'Space') {
        x += 100;
    }
    }
    
    
    // Add event listener on keydown
    document.addEventListener('keydown', moveController);
    