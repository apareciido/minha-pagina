const menuToggle = document.getElementById('menu-toggle')
const navLinks = document.getElementById('nav-links')

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    if (navLinks.classList.contains('active')) {
        menuToggle.textContent = "X"
    } else {
        menuToggle.textContent = "☰"
    }
})