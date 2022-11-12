import { completeRegistration } from "./completeRegistration.js";

const welcomePopUp = document.querySelector('#pop-up .welcome-pop-up');
const signUpBtn = document.querySelector('.sign-up-btn');

export const mainPopUp = document.querySelector('#pop-up .main-pop-up');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const confirmationInput = document.getElementById('confirmation');
const completeRegistrationBtn = document.querySelector('.submit-form');

function showMainPopUp() {
    mainPopUp.classList.add('active');
}

function signUp() {
    welcomePopUp.classList.add('disable');
    showMainPopUp();
}

signUpBtn.addEventListener('click', signUp);

function updateNameInputValue(e) {
    nameInput.value = e.target.value;
}

nameInput.addEventListener('input', updateNameInputValue);

function updateSurnameInputValue(e) {
    surnameInput.value = e.target.value;
}

surnameInput.addEventListener('input', updateSurnameInputValue);

function updateEmailInputValue(e) {
    emailInput.value = e.target.value;
}

emailInput.addEventListener('input', updateEmailInputValue);

function updateConfirmationInputValue(e) {
    confirmationInput.checked = e.target.checked;
}

confirmationInput.addEventListener('input', updateConfirmationInputValue);

completeRegistrationBtn.addEventListener('click', () => completeRegistration(nameInput.value, surnameInput.value, emailInput.value, confirmationInput.checked));