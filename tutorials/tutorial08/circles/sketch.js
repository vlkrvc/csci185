function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // 1. what do we want to repeat? A: draw a circle
    // 2. How long do we want to repeat? A: 5 times 
    // 3. What will change each time? A: y position by 50
    
    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
    let size = canvasWidth + 200; 
    let fillColor = 'red';
    strokeWeight(0);
    while (size >= 0) {
        if (fillColor == 'white') {
            fillColor = 'black';
        } else {
            fillColor = 'white';
        }
        fill(fillColor);
        circle(x, y, size)
        size -= 30;
    }

    drawGrid(canvasWidth, canvasHeight);
}

let counter = 0;
while(counter < 5) {
    circle(100, 200 + 50 * counter, 50);
    ++counter;
}
