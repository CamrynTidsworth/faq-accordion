// TOGGLE MENU

const accordions = document.querySelectorAll('.accordion')
const btn = document.querySelectorAll('.button')

accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active')
        btn.classList.toggle('active')
    })
})
