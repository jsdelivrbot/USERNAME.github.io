var NUM_Circles = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}

function draw() {
    rVal = 255;
    gVal = 0;
    bVal = 0;
    
   var isShifted = false; 
   
   var y = height;
       
   while(y >= 0){
   var x;
   
   if (IsShifted){
     x = circleRadius;  
   } else {
       x = 0;
   }
   fill(color(rVal,gVal,bVal))
   stroke(color(rVal,gVal,bVal));
   while(x<= width){
     ellipse(x, y, circleDiameter, circleDiameter);
     x = x + circleDiameter;  
   }
   
   y = y - circleRadius;
   isShifted = !isShifted;
   
   rVal = (rVal + 254) % 256;
   gVal = (gVal + 7) % 256;
   bVal = (bVal + 3) %256;
  }
}

function keyPressed() {
    if(keyCode === 115 || keyCode === 83) {
       saveCanvas('geometric pattern', 'png');
    }
    return false;
}