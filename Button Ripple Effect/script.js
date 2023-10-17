const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        /* suntetagmenes tou click */
        const x = e.clientX
        const y = e.clientY
        /* suntetagmenes (thesh) tou koumpiou */
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        /* thesh tou clikc, mesa(relative) sto koumpi */
        const xInside = x - buttonLeft
        const yInside = y -buttonTop

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        /* to this de douleuei me arrow functions, opote sto event listener eftiaksa regular function */
        this.appendChild(circle)

        /* remove circle from the DOM */
        setTimeout(() => circle.remove(), 500)
    })
})