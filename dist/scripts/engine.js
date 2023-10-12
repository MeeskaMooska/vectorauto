var menuActive = false;
const menu = document.getElementById('header-link-container');

function handleMenuButtonPress(menuButton) {
    menuButton.classList.toggle('menu-button-change');
    if (menuActive) {
        menu.style.display = 'none';
        menuActive = false;
    } else {
        menu.style.display = 'block';
        menuActive = true;
    }

};

onresize = function() {
    console.log("here");
    if (window.innerWidth > 700) {
        document.getElementById("header-link-container").classList.toggle('menu-button-change');
        menuActive = false;
        menu.style.display = 'block';
    }
};