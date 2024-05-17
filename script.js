const mobileBtn = document.querySelector(".mobile-btn");

const closeBtn = document.querySelector(".close-btn");

const navItems = document.querySelector(".nav-list-items-mobile");


const arrowUp = document.querySelector('.arrow-up')
const arrowDown = document.querySelector('.arrow-down')



// const subFeatBtn = document.querySelector('.feat');
// const subCompBtn = document.querySelector('.comp');

// const hiddenFeat = document.querySelector('.sub-feat');
// const hiddenComp = document.querySelector('.sub-comp');


// subFeatBtn.addEventListener('click', ()=>{
//     hiddenFeat.classList.toggle('active-nav-menu')
// })
// subCompBtn.addEventListener('click', ()=>{
//     hiddenComp.classList.toggle('active-nav-menu')
// })

function toggleMenu(buttonSelector, menuSelector) {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    button.addEventListener('click', () => {
        menu.classList.toggle('active-nav-menu');
    });

}

toggleMenu('.feat', '.sub-feat');
toggleMenu('.comp', '.sub-comp');


const mobileMenuOpen = () =>{
    navItems.classList.toggle("active-nav-menu")
}


mobileBtn.addEventListener('click', mobileMenuOpen);
closeBtn.addEventListener("click", mobileMenuOpen);
