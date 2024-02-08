const noButton = document.getElementById('no')
const yesButton = document.querySelector('.yes')
const noMessagesList = document.querySelector('.no-messages')
const popUp = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')

let i = 0;

const messagesList = ['The No Is For Decorative Purposes Only.', "You Can't Press That.", "Stop PRESSING IT", 'Please Just Press The Yes :((', "I nono Wanna Be Without You.", "You're Being Mean AND Annoying"]

noButton.addEventListener('click', () => {
    noButton.style.position = 'fixed'
    noButton.style.left = (Math.random() * window.innerWidth) + 'px'
    noButton.style.top = (Math.random() * window.innerHeight) + 'px'

    if (i < 6) {
        noMessagesList.innerHTML += `<li> ${messagesList[i]} </li>`
        i++
    }
})

yesButton.addEventListener('click', () => {
    popUp.classList.add('active')
    overlay.classList.add('active')
})