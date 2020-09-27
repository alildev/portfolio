const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

//MAIN TOGGLE
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
})