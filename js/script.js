let navMenu = document.getElementById('navMenu')
let bars = document.querySelector('#navBars')

let active = false
bars.addEventListener('click', () => {
    // navMenu.classList.toggle('active')
    active = !active
    if (active) {
        navMenu.classList.add('active')
        bars.src = 'img/icons/xmark.svg'
    } else {
        navMenu.classList.remove('active')
        bars.src = 'img/icons/bars.svg'
    }
})
