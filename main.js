const text = document.querySelector('.text'),
btn = document.querySelector('.btn')

function showText(){
    text.style.display = "block"
}
btn.addEventListener('click',showText)