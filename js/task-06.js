const input = document.querySelector('#validation-input')

console.dir(input);
const result = Number(input.getAttribute(`data-length`));

input.addEventListener('blur', getBorderColor);

function getBorderColor(event) {
    console.log((event.currentTarget.value));
    if (event.currentTarget.value.length === result) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}