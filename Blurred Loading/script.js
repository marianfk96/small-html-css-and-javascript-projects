const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0
/* let blurring function run every 30 ms! */
let int = setInterval(blurring, 30)

function blurring(){
    load++

    if (load > 99) {
        clearInterval(int)
    } 
    /*prosoxh gia to template string, den einai quotes, alla backtick*/
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/* apo stack overflow th brhkame, map range of numbers to another range of number */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}