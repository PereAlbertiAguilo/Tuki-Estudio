const dropdownMenu = document.querySelector('.dropdown__menu');
const dropdownBtn = document.querySelector('.dropdown_btn');
const dropDownIcon = document.querySelector('.dropdown_icon');
const dropdownIcon = document.querySelectorAll('#navbar__show__icon');

const serviciosDropdownMenu = document.querySelector('.servicios__dropdown__menu');
const serviciosDropdownBtn = document.querySelector('#servicios__dropdown__btn');

const hideMenu = document.querySelector('.hide');
const hideServiciosMenu = document.querySelector('.serviciosHide');

const carouselBtns = document.querySelectorAll('[data-carousel-btn]')

const navbar = document.querySelector('nav');

const navbarHeaderText = document.querySelector('.header__text');
const navbarHeaderLogo = document.querySelector('.navbar__logo');

var lastScrollTop = 0;

// Navabar hide on scroll

window.addEventListener("scroll", () =>{
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.opacity = '0';
    }else{
        navbar.style.opacity = '1';
    }
    navbar.style.transition = "0.3s"
    lastScrollTop = scrollTop;
})

document.onscroll = HideDropdown;

window.onclick = function(e){
    if (!e.target.matches('.dropdown_btn') && 
    !e.target.matches('.dropdown_icon') && 
    !e.target.matches('#servicios__dropdown__btn')){
        HideDropdown();
    }
};

function HideDropdown(){
    if(hideMenu.classList.contains('show')){
        navbarHeaderText.classList.remove('textShrinkLeft')
        navbarHeaderLogo.classList.remove('textShrinkLeft')
        
        dropDownIcon.classList.add('fadeIn');
        dropDownIcon.classList.remove('fadeIn2');
        
        hideMenu.classList.add('hide');
        hideMenu.classList.remove('show');
        
        HideServiciosDropdown();
        
        dropdownMenu.classList.add('slideFromRight');
        dropdownMenu.classList.remove('slideToRight');  
    }
}

//Navbar dropdown

dropdownBtn.addEventListener('click', () =>{

    navbarHeaderText.classList.toggle('textShrinkLeft')
    navbarHeaderLogo.classList.toggle('textShrinkLeft')

    dropDownIcon.classList.toggle('fadeIn');
    dropDownIcon.classList.toggle('fadeIn2');
    
    hideMenu.classList.toggle('hide');
    hideMenu.classList.toggle('show');

    HideServiciosDropdown();
    
    dropdownMenu.classList.toggle('slideFromRight');
    dropdownMenu.classList.toggle('slideToRight');
})

function HideServiciosDropdown(){
    hideMenu.classList.remove('hidden');
    
    if(hideServiciosMenu.classList.contains('serviciosHide')){
        hideServiciosMenu.classList.add('hidden');
    }
}

//Navbar dropdown dropdown

serviciosDropdownBtn.addEventListener('click', () =>{
    hideServiciosMenu.classList.toggle('serviciosHide');
    hideServiciosMenu.classList.toggle('serviciosShow');
    hideServiciosMenu.classList.remove('hidden');

    serviciosDropdownMenu.classList.toggle('slideFromRightOffset');
    serviciosDropdownMenu.classList.toggle('slideToRightOffset');
})


//Carousel

carouselBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;
        const slides = btn
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})