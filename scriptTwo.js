let img;
function preload() { img = loadImage('https://cdn.glitch.global/5565e136-0d5c-4a7d-ace1-e53d5e83e2c6/dolphin1.gif?v=1677912016288'); }


function setup() {
    
    img.resize(500, 500);
    createCanvas(img.width, img.height);
    noLoop();
  }
  
  function draw() { drawMosaic(5) }

  const columnWidth = (dotRadius) => dotRadius * 3;

  const numberOfColumns = (dotRadius) =>
    Math.ceil(width / columnWidth(dotRadius));
  
  function drawColumnDots(dotRadius, offsetX) {
    // [TODO] Replace the line with a column of dots
    line(offsetX, 0, offsetX, height);
  }
  
  function drawMosaic(dotRadius) {
    for (let i = 0; i < numberOfColumns(dotRadius); i++) {
      offsetX = i * columnWidth(dotRadius);
      drawColumnDots(dotRadius, offsetX);
    }
  }

  function drawColumnDots(dotRadius, offsetX) {
    // [TODO] Replace the line with a column of dots
    line(offsetX, 0, offsetX, height);
  
    let dotDiameter = 2 * dotRadius;
    let dotHeightWithPadding = dotDiameter + 2;
    let numDotsInColumn = Math.floor(height / dotHeightWithPadding);
    let topY = Math.floor(random(10));

    for (let i = 0; i < numDotsInColumn; i++) {
      let centerX = Math.floor(random(
        offsetX + dotRadius,
        offsetX + columnWidth(dotRadius) - dotRadius,
      ))
  
      let centerY = topY + i * dotHeightWithPadding + dotRadius;
      let dotColor = img.get(centerX, centerY);
      noStroke()
      filter(THRESHOLD);
      fill(dotColor);

  
      ellipse(centerX, centerY, dotDiameter, dotDiameter);
    }
  }