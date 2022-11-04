const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(data.x, data.y, data.d);
}

const data = {
    x: 100,
    y: 100,
    d: 100,
    color: 'white'
}

const data1 = {
    x: 100,
    y: 100,
    d: 100,
    color: 'white'
}

let activeShape = data;


function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function mouseClicked() {
    let distance = (data.x, data.y, mouseX, mouseY);
    console.log(distance);
    if (distance < data.d/2) {
        console.log("First circle");
        activeShape = data;
    } else {
        console.log ("Second circle");
        activeShape = data1;
    }
    activeShape.x = mouseX;
    activeShape.y = mouseY;
}

function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d); // where this drawn
    cirlce(data1.x, data1.y, data1.d);
}

function mouseDragged() {
    activeShape.x = mouseX;
    activeShape.y = mouseY;
   // let d = dist(data.x, data.y, mouseX, mouseY);
    //if (d < data.d/2 || data.color == 'red') {
   //     data.color = 'red';
        // data.x = mouseX;
        // data.y = mouseY;
    // } 
}

function mouseReleased() {
   // data.color = 'white';
}

function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d);

    // message
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag the circle.", canvasWidth/2, canvasHeight/2);
}