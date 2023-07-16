
function showLine (element){
    var line = Rect();
}
function hideLine (element){
    var line = Rect();
}

function returnText(){
  let input = document.getElementById("textbox").value
  alert(input)
}
const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";


// Initialize the drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw
function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
}

function saveDrawing() {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'drawing.png';
    link.click();
  }
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // Event listeners
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  
  const saveButton = document.getElementById('saveBtn');
  saveButton.addEventListener('click', saveDrawing);
  
  const clearButton = document.getElementById('clearBtn');
  clearButton.addEventListener('click', clearCanvas);