const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const text = "We love programming!"

let idx = 1
let speed = 300/speedEl.value 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }

    setTimeout (writeText, speed)
}

/* any input! we can type the number or use the arrow keys */
speedEl.addEventListener("input", (e) => {
    /* prosthesa to if, giati phgaine parapanw ap to max. exei thema omws otan mhdenizei */
    if (e.target.value > 5) {
        e.target.value = 5
    }
    speed = 300 / e.target.value
})