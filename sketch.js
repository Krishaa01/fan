let isSqueezed = false;
function setup() {
  createCanvas(500, 500, WEBGL);

}

function draw() {
  background(78,23,56);

  camera(500, 600, 780);

  if (isSqueezed === true) {
  
  }
  
  rotateY(frameCount * 0.005);
  fill('rgb(255,252,252)')
  sphere(80);
  
  fill('rgb(171,233,98)');;
  rotateY(frameCount * 0.10);
  box(-30,-20,695);
  
  fill('gold');
  rotateX(frameCount * 0.10);
  box(-30,-20,695);
  
  fill('pink');
  rotateY(frameCount * 0.10);
  box(-30,-20,695);
  
  fill('rgb(106,106,234)');
  rotateX(frameCount * 0.10);
  box(-30,-20,695);
  
  
  
  
  fill('rgb(171,233,98)');;
  rotateY(frameCount * 0.08);
  box(-30,-20,695);
  
  fill('gold');
  rotateX(frameCount * 0.08);
  box(-30,-20,695);
  
  fill('pink');
  rotateY(frameCount * 0.08);
  box(-30,-20,695);
  
  fill('rgb(106,106,234)');
  rotateX(frameCount * 0.08);
  box(-30,-20,695);
   
  
   
 
  
  
}
function doubleClicked() {
  isSqueezed = true;
}