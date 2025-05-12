

let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth    ;
canvas.height = window.innerHeight   ;

//method getContext
let c = canvas.getContext("2d")


// randomIntevall numbers
const randomIntFromInterval = (min, max) =>  { return Math.floor(Math.random() * (max - min + 1) + min)}

// Making animation : object Oriented Programming
class Ball {
    constructor(){
        this.r = 10
        this.x = randomIntFromInterval(0 + this.r, window.innerWidth - this.r);
        this.y = randomIntFromInterval(0 + this.r, window.innerHeight - this.r);
        this.vx = (Math.random() - .5) * 4
        this.vy = (Math.random() - .5) * 4
        this.color = ['black', 'blue', "brown", 'green', 'red', 'yellow', 'pink', 'silver']
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
        this.vx = this.x +  this.r > window.innerWidth  || this.x - this.r < 0 ? - this.vx : this.vx
        this.vy = this.y +  this.r > window.innerHeight || this.y - this.r < 0 ? - this.vy : this.vy

        this.x += this.vx
        this.y += this.vy
        this.draw()
    }
}

let balls = []
for (let i = 0 ; i < 50; i++){
    balls.push(new Ball)
}

// animate
const animate = () => {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    balls.forEach(ball =>{
        ball.update()
    })
    requestAnimationFrame(animate)
}
animate();
