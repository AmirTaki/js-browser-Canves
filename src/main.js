let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth ;
canvas.height = window.innerWidth ;

//method getContext
let c = canvas.getContext("2d")

//Draw a bow or Draw a circle
// arc (centerX, centerY, Radius,  bowStart, bowEnd)

/*
P    : clock
---------
0    :   3
.5p  :   6
1p   :   9 
1.5p :   12
2p   :   3

*/

c.beginPath()
c.arc(300, 300, 50, Math.PI/2, 1.5 * Math.PI)
c.stroke()

c.beginPath()
c.arc(400, 300, 70,  Math.PI/2, 2 *  Math.PI )
c.fillStyle = "green"
c.fill()



c.beginPath()
c.arc(300, 600, 60, Math.PI, Math.PI * 2 )
c.fillStyle = "silver"
c.fill();
c.strokeStyle = "red"
c.closePath()
c.stroke()

// c.clearRect(100, 200, 300, 400)  // clear canves
c.clearRect(0, 0, window.innerWidth, window.innerHeight)  // clear canves


for (let i = 0 ; i < 70 ; i++){
    X = Math.random() * window.innerWidth    
    Y = Math.random() * window.innerHeight 

    c.beginPath()
    c.arc(X, Y, 30, 0, Math.PI * 2)
    c.strokeStyle = "aqua";
    c.stroke()
}

