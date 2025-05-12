let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth    ;
canvas.height = window.innerHeight   ;

//method getContext
let c = canvas.getContext("2d")

// obj => screen
this.screen = {
    width : window.innerWidth,
    height : window.innerHeight
}
// obj => mouse
this.mouse = {
    x : screen.width / 2,
    y : screen.height / 2
}

// randomIntevall numbers
const randomIntFromInterval = (min, max) =>  { return Math.floor(Math.random() * (max - min + 1) + min)}

// Making animation : object Oriented Programming
class Ball {
    constructor(x, y){
        this.gravity =  .98 // gravity
        this.friction = 0.8  // friction
        this.r = 10
        this.x = x || randomIntFromInterval(0 + this.r, window.innerWidth - this.r);
        this.y = y || randomIntFromInterval(0 + this.r, window.innerHeight - this.r);
        this.dx = (Math.random() - .5) * 5
        this.dy = (Math.random() - .5) * 4
        this.color = ['black', 'blue', "brown", 'green', 'red', 'yellow', 'pink', 'white']
        this.contColor = randomIntFromInterval(0, this.color.length -1)
        this.draw()
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true)
        c.fillStyle = this.color[this.contColor]
        c.fill()
    }
    update(){
        // gravity
        if (this.y + this.r + this.dy >= screen.height )
        {
            this.dy =  -this.dy * this.friction
            this.dx =  -this.dx * this.friction
        }
        else
        {
            this.dy += this.gravity
        }

        if  (this.x + this.r + this.dx >= screen.width || this.x + this.r + this.dx <= 0)
        {
            this.dx = - this.dx 
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
       
        
    }
}


// animate : class canvas
class Canvas {
    constructor(){
        this.balls = []
        for (let i = 0 ;i < 30; i++){
            this.balls.push(new Ball())
        }
    }

    animate() {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.balls.forEach((ball) =>{
            ball.update()
        })
        requestAnimationFrame(this.animate.bind(this))
    }
}


let mycan = new Canvas();
mycan.animate()


// click
window.addEventListener("click", (event)=>{
    mycan.balls.push(new Ball(event.clientX, event.clientY))
})
// mouse Move
window.addEventListener("mousemove",(event)=>{  
    mouse.x = event.clientX
    mouse.y = event.clientY
})

/// resize screen   
window.addEventListener("resize",(e)=>{
    canvas.width = screen.width
    canvas.height = screen.height
})

