const popup = document.getElementById('popup');
const minimizeButton = document.getElementById('popup-minimize-button');
const pathButton = document.getElementById('popup-path-button');
const closeButton = document.getElementById('popup-close-button');
const logoWindow = document.getElementById('logo-popup');
const dialogText = document.getElementById('dialog-text');


const newText = " ";
let cooldown = false;


function typeText(newText) {
    let currentWidth = 0;
    const maxWidth = newText.length;
    const typingInterval = setInterval(() => {
        if (currentWidth <= maxWidth) {
            dialogText.textContent = newText.slice(0, currentWidth);
            currentWidth++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}


minimizeButton.addEventListener('click', ()=> {

    if (!cooldown) {
        cooldown = true;
    
        logoWindow.classList.add('transition-height');
        logoWindow.classList.add('minimized');
        logoWindow.classList.remove('opened');
        logoWindow.style.height = '0';
        setTimeout(() => {
            logoWindow.classList.remove('transition-height');
            cooldown = false;
        }, 800);
    }
}); 

closeButton.addEventListener('click', ()=> {
    if (!cooldown) {
        cooldown = true;

        popup.classList.add('transition-height');
        popup.classList.add('closed');
        popup.style.opacity = '0';
        typeText("JUD[AS]: THIS WASN'T SUPPOSE TO HAPPEN..")
        setTimeout(() => {
            popup.classList.remove('transition-height');
            cooldown = false;
        }, 800);
    }
});

pathButton.addEventListener('click', ()=> {

    if (!cooldown) {
        cooldown = true;

        logoWindow.classList.add('transition-height');
        logoWindow.classList.add('opened');
        logoWindow.classList.remove('minimized');
        logoWindow.style.height = '6em';
        setTimeout(() => {
            logoWindow.classList.remove('transition-height');
            cooldown = false;
        }, 800);
    }
});

