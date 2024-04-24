const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown',(e) => {
        /* produces an error, but doesn't break, and doesn't let you type more digits in the 6th field*/
        if (e.key>=0 && e.key<=9 && idx<6) {
            console.log(idx)
            codes[idx].value = ''
            setTimeout(() => codes[idx+1].focus(), 10)
        }
        else if (e.key === 'Backspace' && idx>0) {
            setTimeout(() => codes[idx-1].focus(), 10)
        }
    })
})