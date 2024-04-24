const container = document.getElementById('container')
const colors = ['#96F550', '#E36588', '#22aed1', '#FF0035', '#820263']

const SQUARES = 500

for(let i=0; i< SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    /* mouseover event not working when i emulate a different screen size, i don;t kniw why*/
    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    console.log(color)
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

