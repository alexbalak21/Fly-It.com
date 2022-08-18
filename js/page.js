let nav = document.querySelector('#menu')
let toggle = document.querySelector('#tog')

let active = false

toggle.addEventListener('click', () => {
    console.log('click')
    nav.classList.toggle('active')
})
