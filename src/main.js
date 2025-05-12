let ball = document.querySelector("#ball")
let offset = 10

// setinterval
// setInterval(()=>{
//     ball.style.left = offset + "px";
//     offset += 1
// }, 10)



function animate (){
    ball.style.left = offset + "px"
    offset += 1;
    requestAnimationFrame(animate)
}


animate()


let canvas = document.querySelector("canvas")

canvas.width  = window.innerWidth ;
canvas.height = window.innerWidth ;

//method getContext
let c = canvas.getContext("2d")


// Making animation
let r = 40;
let x = 50;
let y = 50;
let vx = 4

function animateCanves (){
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    c.beginPath()
    c.arc(x, y, r, 0, 2 * Math.PI, true)
    c.fillStyle = "blue"
    c.fill()
    x += vx
    requestAnimationFrame(animateCanves)
}


animateCanves()