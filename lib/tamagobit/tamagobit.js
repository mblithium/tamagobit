
const tamagobitSettings = {
    canvas: {
        x: 500, // Eixo X (width)
        y: 500, // Eixo Y (height)
        s: 16, // Divisões
    }
}

const pixel = {
    w: tamagobitSettings.canvas.x / tamagobitSettings.canvas.s,
    h: tamagobitSettings.canvas.y / tamagobitSettings.canvas.s,
}

// 16 x 16
let squaredata = [];
for (let i = 0; i < tamagobitSettings.canvas.s; i++) { squaredata.push(Array(tamagobitSettings.canvas.s)) };

function setup() {
    createCanvas(tamagobitSettings.canvas.x, tamagobitSettings.canvas.y);
    background(200);
}
  
function draw() {
    clear();
    updateLayout();
}

function updateLayout() {
    for (let i = 0; i < squaredata.length; i++) {
        for (let c = 0; c < squaredata[i].length; c++) {
            if (squaredata[c][i] == 1) { fill("#000") } 
            else { fill("#ffff")};
            rect(pixel.w * i, pixel.h * c, pixel.w, pixel.h);
            text("teste", pixel.w * i, pixel.h * c, pixel.w, pixel.h);
        };
    };
}

/*function animate(animationdata) {
  for (animArr of animationdata) {
    console.log(animArr);
    animPosX = animArr[0];
    animPosY = animArr[1];
    squaredata[animPosX][animPosY] = 1;
  }
}

animate([[0, 1], [5, 4]], 5)*/