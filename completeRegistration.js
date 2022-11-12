import { mainPopUp } from "./main.js";
import { generatePassword } from "./passwordGenerator.js";

const finalPopUp = document.querySelector('#pop-up .final-pop-up');
const nameSpan = document.querySelector('.name');
const passwordSpan = document.querySelector('.password');

const myDataBase = [];

const warningMessage = "Some mistakes found! Please try again!"

function showFinalPopUp(name) {
    finalPopUp.classList.add('active');
    nameSpan.textContent = name;
}

export function completeRegistration(nameInputValue, surnameInputValue, emailInputValue, confirmationInput) {
    const requiredInputLength = 1;
    const atSign = "@";

    const formRequirements = nameInputValue.length > requiredInputLength && surnameInputValue.length > requiredInputLength && emailInputValue.includes(atSign) && emailInputValue.length > requiredInputLength && confirmationInput;

    if (formRequirements) {
        alert("The form is validated");

        const userProfile = {
            name: nameInputValue,
            surname: surnameInputValue,
            email: emailInputValue,
            isPrivacyConfirmed: confirmationInput,
        }

        myDataBase.push(userProfile);

        nameInputValue = "";
        surnameInputValue = "";
        emailInputValue = "";
        confirmationInput = false;

        mainPopUp.classList.remove('active');
        showFinalPopUp(userProfile.name)
        generatePassword(passwordSpan, 10);
    } else {
        alert(warningMessage);
    }
}