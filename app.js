const colors = ['green' , 'red', 'rgba(143,071,315)', 'white'];

const btn = document.getElementById('btn')

const cor = document.querySelector('.span-color')

console.log(btn,cor)


btn.addEventListener('click', function(){
    const random = aleat()

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[random]
    cor.textContent = colors[random]

})

function aleat(){
    return Math.floor(Math.random() * colors.length)
}