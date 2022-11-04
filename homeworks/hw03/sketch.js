function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):

    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

function drawOval() {
    fill('teal');
    ellipse(25, 50, 25, 25.5);
}


// define your drawCreature function here:

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
