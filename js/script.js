/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Form Input Validation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";


/* Variable to store form inputs */
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const framework = document.querySelector("#framework");
const languagesContainer = document.querySelector("#radio-wrapper");
const languagesInputs = document.querySelectorAll("#languages input");

/* Helper function to validate name input */
const nameValidator = () => {
  const nameValue = name.value;
  if (nameValue.length > 0) {
    name.style.borderColor = 'cadetBlue';
    } else {
    name.style.borderColor = 'red';
  }
}


/* Helper function to validate email input */
const emailValidator = () => {

  const emailValue = email.value;
  const atSymbol = emailValue.indexOf(`@`);
  const dotSymbol = emailValue.indexOf(`.`);
  if (atSymbol > 1 && dotSymbol > atSymbol + 1) {
      email.style.borderColor = 'cadetBlue';
      return true;
      } else {
      email.style.borderColor = 'red';
      return false;
  }
}


/* Helper function to validate framework element */
const frameworkValidator = () => {

  const frameworkValue = framework.value;
  if (frameworkValue !== 'Choose framework') {
      framework.style.borderColor = 'cadetBlue';
      return true;
      } else {
      framework.style.borderColor = 'red';
      return false;
  }
}


/* Helper function to validate language section */
const languageValidator = () => {
  for (let i = 0; i < languagesInputs.length; i++) {
    if (languagesInputs[i].checked) {
      languagesContainer.style.borderColor = 'cadetBlue';
      return true;
    }
  }
  languagesContainer.style.borderColor = 'red';
  return false;
};

name.addEventListener('keyup', (e) => {
  nameValidator();
});
email.addEventListener('keyup', (e) => {
  emailValidator();
});
framework.addEventListener('click', (e) => {
  frameworkValidator();
});
languagesContainer.addEventListener('mouseleave', (e) => {
  languageValidator();
});


/* Submit listener on the form element */
form.addEventListener('submit', (e) => {
nameValidator();
emailValidator();
frameworkValidator();
languageValidator();

  if (!nameValidator() || !emailValidator() || !frameworkValidator() || !languageValidator()) {
    e.preventDefault();
  }
});
