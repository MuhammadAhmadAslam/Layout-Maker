let primarycolor = document.getElementById('primary-color')
let secondarycolor = document.getElementById('secondary-color')
let numberInput = document.getElementById('numberInput')
let incrementBtn = document.getElementById('incrementBtn')
let decrementBtn = document.getElementById('decrementBtn')
let fontfamily = document.getElementById('font-family').value
let applytheme = document.getElementById('apply-theme')
let downloadcss = document.getElementById('download-css')
let preview = document.getElementById('preview')
let h2 = document.getElementById('h2')
let para = document.getElementById('para')
let forcss = document.getElementById('forcss')
incrementBtn.addEventListener('click', () => {
   var inputValue = JSON.stringify(numberInput.value)
   inputValue = parseFloat(inputValue)
   inputValue = numberInput.value
   inputValue = parseInt(inputValue)
   if (inputValue < 70) {
       numberInput.value = inputValue + 2
   }
})
decrementBtn.addEventListener('click', () => {
   var inputValue = JSON.stringify(numberInput.value)
   inputValue = parseFloat(inputValue)
   inputValue = numberInput.value
   inputValue = parseInt(inputValue)
   if (inputValue > 0) {
       numberInput.value = inputValue - 2
   }
})


applytheme.addEventListener('click' , () => {
    preview.style.backgroundColor = secondarycolor.value
    preview.style.color = primarycolor.value
    h2.innerText = 'Hello How Are You?'
    para.innerText = 'What A Fantastic Day'
    h2.style.fontFamily = fontfamily.value
    h2.style.fontSize = `${numberInput.value}px`
})


downloadcss.addEventListener('click', () => {
    forcss.innerText = `
    body{
        background-color : ${secondarycolor.value};
        color: ${primarycolor.value}
    }
    h2{
        font-family: ${fontfamily.value}
        font-size: ${numberInput.value}px
    }    `
})