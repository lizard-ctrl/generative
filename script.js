let colors =["#ff4aed","#4ac9ff","#ff4a95", "#fed000", "#68ff4a", "#e1ff4a", "#e2f0f3", "#fff94a"];


function setup() {
	createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke()
    colorMode(RGB, 200, 200);
   
	tiling()
}

function tiling() {
	let offset = 100;
	let gridCountW = 50;
	let gridCountH =40;
	let gridW = (width - (offset *2)) / gridCountW;
	let gridH = (height - (offset *2)) / gridCountH;
	let emp = gridCountW * gridCountH;
	let grids = [];
	// let rects = [];

//create the grid array
	for (let j = 0; j < gridCountW; j++) {
		let arr = []
		for (let i = 0; i < gridCountH; i++) {
			arr[i] = false;
		}
		grids[j] = arr;
	}
//fill the grid with rectangles 
	while (emp > 0) {
		let w = int(random(1, gridCountW));
		let h = w;
		let x = int(random(gridCountW - w + 1));
		let y = int(random(gridCountH - h + 1));
		let lap = true;
		for (let j = 0; j < h; j++) {
			for (let i = 0; i < w; i++) {
				if (grids[x + i][y + j]) {
					lap = false;
					break;
				}
			}
		}

		if (lap) {
			for (let j = 0; j < h; j++) {
				for (let i = 0; i < w; i++) {
					grids[x + i][y + j] = true;
				}
			}
			let xx = offset + x * gridW;
			let yy = offset + y * gridH;
			let ww = w * gridW;
			let hh = h * gridH;
			form(xx, yy, ww, hh);
			emp -= w * h;
		}
	}
}


function randomcolor(){
  let randomPos = Math.floor(Math.random(0, color.length)*colors.length);
  return colors [randomPos];
  
}


function form(x, y, w) {
// squareSize = w/2;
squareSize = w; // colors shade dark 
let middle = w/2;
  
  fill(randomcolor());
  rect(x+middle, y+middle, squareSize - 5);
  
  fill(randomcolor());
  rect(x+middle, y+middle, squareSize - 14);
  
   fill(randomcolor());
  rect(x+middle, y+middle, squareSize - 10);
  
    fill(randomcolor());
  rect(x+middle, y+middle, squareSize - 26);
  
   fill(randomcolor());
 rect(x+middle, y+middle, squareSize - 35);

  fill(randomcolor());
  rect(x+middle, y+middle, squareSize - 45);
  

}


  