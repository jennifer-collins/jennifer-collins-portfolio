window.addEventListener('scroll', () => {
    document.querySelector('.mainNav').classList.toggle('scrollActive', window.scrollY > 0);
})