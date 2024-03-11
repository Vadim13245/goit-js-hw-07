const inputName = document.getElementById("name-input")
const greet = document.getElementById("name-output")
let anonymous = "Anonymous";

greet.textContent = anonymous;

inputName.addEventListener('input', inputTextHandler);

function inputTextHandler(event) {
  greet.textContent = event.target.value || anonymous;
};