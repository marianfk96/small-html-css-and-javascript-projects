const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dargstart", dragStart)
fill.addEventListener("dragend", dragEnd)

/* anti gia forEach, for loop */
for(const empty of empties) {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}

function dragStart() {
    /* append a class name */
    this.className += ' hold'
    /* de douleuei to invisible, h empty..isws einai thema tou browser */
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}


