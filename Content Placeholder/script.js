const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80" alt="laptop">' 
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, maiores?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="portrait">'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'Oct 10, 2023'

    animated_bgs.forEach((bg) => {
        bg.classList.remove("animated-bg")
    })

    animated_bg_texts.forEach((text) => {
        text.classList.remove("animated-bg-text")
    })
}

