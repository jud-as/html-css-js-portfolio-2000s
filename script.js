
const minimizeButton = document.getElementById('popup-minimize-button');
const pathButton = document.getElementById('popup-path-button');
const closeButton = document.getElementById('popup-close-button');
const logoWindow = document.getElementById('logo-popup');

let cooldown = false;

minimizeButton.addEventListener('click', ()=> {

    if (!cooldown) {
        cooldown = true;
    
        logoWindow.classList.add('transition-height')
        logoWindow.classList.add('closed');
        logoWindow.classList.remove('opened');
        logoWindow.style.height = '0';
        setTimeout(() => {
            logoWindow.classList.remove('transition-height');
            cooldown = false;
        }, 800);
    }
}); 

pathButton.addEventListener('click', ()=> {

    if (!cooldown) {
        cooldown = true;

        logoWindow.classList.add('transition-height');
        logoWindow.classList.add('opened');
        logoWindow.classList.remove('closed');
        logoWindow.style.height = '6em';
        setTimeout(() => {
            logoWindow.classList.remove('transition-height');
            cooldown = false;
        }, 800);
    }
});


closeButton.addEventListener('click', ()=> {
    
});