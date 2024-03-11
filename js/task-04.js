const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;

function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

decr.addEventListener("click", decrement);
incr.addEventListener("click", increment);