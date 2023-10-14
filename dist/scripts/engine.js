// TODO fix menu button logic. It's not working properly. (not a big deal, but still)
var menuActive = false;
const menu = document.getElementById('header-link-container');

function handleMenuButtonPress(menuButton) {
    if (menuActive) {
        menuButton.classList.remove('menu-button-change');
        menu.style.display = 'none';
        menuActive = false;
    } else {
        menuButton.classList.add('menu-button-change');
        menu.style.display = 'block';
        menuActive = true;
    }

};

onresize = function() {
    if (window.innerWidth > 700) {
        menuActive = false;
        menu.style.display = 'block';
    } if (window.innerWidth < 700) {
        document.getElementById("header-link-container").classList.remove('menu-button-change');
        menu.style.display = 'none';
    }
};

function formSubmittedMessage() {
    console.log('form submitted');
}

function inputFocusHandler(inputObject) {
    let inputLabel = inputObject.previousElementSibling
    inputLabel.classList.add('input-label-active');
    inputLabel.style.color = 'red';
}

function inputBlurHandler(inputObject) {
    let inputLabel = inputObject.previousElementSibling;
    if (inputObject.value === '') {
        inputLabel.classList.remove('input-label-active');
    }
    inputLabel.style.color = 'grey';
}

function textareaFocusHandler(inputObject) {
    let inputLabel = inputObject.previousElementSibling
    inputLabel.style.color = 'red';
}

function textareaBlurHandler(inputObject) {
    let inputLabel = inputObject.previousElementSibling;
    inputLabel.style.color = 'grey';
}