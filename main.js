const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

//MAIN TOGGLE
menuBtn.addEventListener('click', () => {
    toggle();
});

// TOGGLE ON ITEM IF CLICK IS OPEN
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('open')) {
            toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
}