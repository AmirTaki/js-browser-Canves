let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth / 2;
canvas.height = window.innerWidth / 2;

//method getContext
let c = canvas.getContext("2d")


c.fillText("Draw a rectangle", 100, 30)
c.font = "30px verdana"
c.translate(100, 100)  // Origin change point


// Draw a rectangle
// fillReact(distance left, distance top, Length, Width)

c.fillStyle = "#27ae60"
c.fillRect(100, 0, 100, 100 )

c.fillStyle = "#3498db"
c.fillRect(300, 100, 100, 100 )

c.fillStyle = "#8e44ad"
c.fillRect(500, 0, 100, 100 )

