const noButton = document.getElementById('no')
const yesButton = document.querySelector('.yes')
const noMessagesList = document.querySelector('.no-messages')
const popUp = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')

let i = 0;

const messagesList = ['The No Is For Decorative Purposes Only.', "You Can't Press That.", "Stop PRESSING IT", 'Please Just Press The Yes :((', "I nono Wanna Be Without You.", "You're Being Mean AND Annoying", "Ok That's It If You Click No ONE More Time I Am Removing It", "Ok There Now You Can Only Say Yes!!!"]

noButton.addEventListener('click', () => {
    noButton.style.position = 'fixed'
    noButton.style.left = (Math.random() * window.innerWidth) + 'px'
    noButton.style.top = (Math.random() * window.innerHeight) + 'px'

    if (i < 8) {
        noMessagesList.innerHTML += `<li> ${messagesList[i]} </li>`
        i++
    }

    if (i === 8) {
        noButton.style.display = 'none'
    }
})

yesButton.addEventListener('click', () => {
    popUp.classList.add('active')
    overlay.classList.add('active')
})