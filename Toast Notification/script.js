const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4'
]

const types = ["success", 'error', 'info']

/* mporw na perase kai arguments, message kai type px, gia na pairnv sugkekrimeno mhnuma kai analogws ton tupo, alo xrwma notification */
button.addEventListener("click", () => createNotification(message = null, type = null))

function createNotification() {
    const notif = document.createElement("div")
    notif.classList.add("toast")
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    /* add the messages in the DOM */
    toasts.appendChild(notif)
    /* make them disappear after 3 seconds */
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage () {
    return messages[Math.floor(Math.random()*messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random()*types.length)]
}