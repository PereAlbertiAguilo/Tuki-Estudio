const dropdownMenu = document.querySelector('.dropdown__menu');
const dropdownBtn = document.querySelector('.dropdown_btn');
const dropdownIcon = document.querySelectorAll('#navbar__show__icon');

const serviciosDropdownMenu = document.querySelector('.servicios__dropdown__menu');
const serviciosDropdownBtn = document.querySelector('#servicios__dropdown__btn');

dropdownBtn.addEventListener('click', () =>{
    dropdownMenu.classList.toggle('hide')
})

serviciosDropdownBtn.addEventListener('click', () =>{
    serviciosDropdownMenu.classList.toggle('hide')
})
/*

function ShowNavBar(){
    if(navbarDropdwonActive == true)
    {
        Hide();
    }
    else
    {
        Show();
    }
}

if(navbarDropdwonActive == true){
    document.addEventListener('click', e =>{
        if(!dropdownMenu.contains(e.target)){
            dropdownMenu.classList.add('hide')
        }
    })
}

function Hide()
{
    navbarDropdwonActive = false;
    navbarShowIcon.style.transform = 'rotate(0deg)';
    navbarShowIcon.style.transition = 'all 0.3s ease';
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.transition = 'all .4s ease';
}
function Show()
{
    navbarDropdwonActive = true;
    
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.transition = 'all .4s ease';
}

function ShowServicesNavBar(){
    if(navbarServicesDropdwonActive == true)
    {
        HideServices();
    }
    else
    {
        ShowServices();
    }
}

function HideServices()
{
    navbarServicesDropdwonActive = false;
ios.style.display = 'none';
ios.style.transition = 'all .4s ease';
}
function ShowServices()
{
    navbarServicesDropdwonActive = true;
ios.style.display = 'flex';
ios.style.transition = 'all .4s ease';
}
*/
/*
document.addEventListener('click', e =>{
    if(!dropdownMenu.contains(e.target) && e.target !== d){
        dropdownMenu.classList.add('hide');
    }
})

/*
const navbarShowIcon = document.querySelector('#navbar_icon');


window.onresize = CloseDropdown;
window.onscroll = CloseDropdown;

function CloseDropdown(){
    if(navbarDropdwonActive == true){        
        Hide();
    }
}

function ShowNavBar(){
    if(navbarDropdwonActive == true)
    {
        Hide();
    }
    else
    {
        Show();
    }
}

function Hide()
{
    navbarDropdwonActive = false;
    
    navbarShowIcon.style.transform = 'rotate(0deg)';
    navbarShowIcon.style.transition = 'all 0.3s ease';
    
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.transition = 'all .4s ease';
}
function Show()
{
    navbarDropdwonActive = true;
    
    navbarShowIcon.style.transition = 'all 0.3s ease';
    navbarShowIcon.style.transform = 'rotate(90deg)';
    
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.transition = 'all .4s ease';
}
*/

