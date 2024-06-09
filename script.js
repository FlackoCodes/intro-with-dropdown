const mobileBtn = document.querySelector(".mobile-open");
const closeBtn = document.querySelector(".close-btn");
const navItems = document.querySelector(".nav-list-mobile");

const toggleMobileMenu = () =>{
    navItems.classList.toggle("active-nav-menu")
}

mobileBtn.addEventListener('click', toggleMobileMenu);
closeBtn.addEventListener("click", toggleMobileMenu);

function toggleMenu(buttonSelector, menuSelector) {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    button.addEventListener('click', () => {
        menu.classList.toggle('active-nav-menu');
    });
}

toggleMenu('.feat-mbl', '.sub-feat');
toggleMenu('.comp-mbl', '.sub-comp');

