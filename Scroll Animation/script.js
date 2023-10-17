const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        /* find an element in regards with the viewport, according to certain property, in this case top */
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add("show")
        }
        else {
            box.classList.remove("show")
        }
    })
}