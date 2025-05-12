let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth ;
canvas.height = window.innerWidth ;

//method getContext
let c = canvas.getContext("2d")

// line drawing

c.beginPath()                       // draw new
c.lineTo(50, 300)                  //  point A
c.lineTo(300, 100)                // point  B
c.lineTo(400, 300)               //  point C

// method stroke :
c.stroke.stroke = "#8e44ad"     // color
c.closePath()                   // Connecting the first and last dots  
c.stroke()                      // method draw



c.beginPath()               // draw new
c.lineTo(50, 400)          // point a
c.lineTo(90, 600)          // point b
c.lineTo(120, 299)          // point c

// method fill style :
c.fillStyle = "silver"
c.fill()