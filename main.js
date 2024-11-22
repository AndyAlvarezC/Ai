const header = document.querySelector('header');
const threshold = 100;

window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

