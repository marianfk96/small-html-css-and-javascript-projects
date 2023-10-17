const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeEl = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearBtn = document.getElementById("clear")

let size = 10
let color ="black"
let x
let y
let isPressed = false

/* mouse events */

canvas.addEventListener("mousedown", (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        /* to circle gia to width, to line gia na einai enwmena otan pame grhgora */
        drawCircle(x2, y2)
        drawLine (x, y, x2, y2)

        x = x2
        y = y2
    }
})

/* toolbox controls */
colorEl.addEventListener("change", (e) => {
    color = e.target.value
})

increaseBtn.addEventListener("click", () => {
    size +=5

    if (size > 50){
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener("click", () => {
    size -=5
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2) // draw a  circle
    ctx.fillStyle=color
    ctx.fill()
}

/* apo to x1 sto x2, apo to y1 sto y2 */
function drawLine (x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}


