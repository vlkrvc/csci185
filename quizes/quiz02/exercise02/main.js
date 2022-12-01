const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    fill('#db5461');
    ellipse(500, 500, 70, 100);



    drawGrid(canvasWidth, canvasHeight);
}

function hasNose(){
    if (hasNose == true) {
        fill('#db5461');
        ellipse(500, 500, 70, 100);
    } else {

    }
}

function drawElmo(centerX, centerY, size, color, hasNose) {


}
// function definition goes here:
