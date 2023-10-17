const loveMe = document.querySelector(".loveMe")
const times = document.getElementById("times")

let clickTime = 0
let likes = 0

/* mporw kai me dblclick event, apla gia eksaskhsh to eftiaksa custom */
loveMe.addEventListener("click", (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    }
    else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        }
        else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")
    /* pairnw tiw suntetagmenes toy click se sxesh me to viewport*/
    const x = e.clientX
    const y = e.clientY
    
    const leftOffset  = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    /* suntetagmenes se sxesh me thn eikona */
    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++likes
    /* remove heart divs from the dom */
    setTimeout(() => heart.remove(), 1000)
}