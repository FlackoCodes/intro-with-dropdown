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

toggleMenu('.feat', '.sub-feat');
toggleMenu('.comp', '.sub-comp');

document.querySelector('.feat').addEventListener('click', ()=>{
    console.log('feat clicked');
})
