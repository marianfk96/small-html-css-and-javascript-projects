const labels = document.querySelectorAll(".form-control label")
/* bazw se span ta label, prosthetw to wave inline, pollaplasiazontas to index tous*/
labels.forEach(label => {
    label.innerHTML = label.innerText.split("").map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`).join("")

})