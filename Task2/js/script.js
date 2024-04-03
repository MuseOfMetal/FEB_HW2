const h_value = document.querySelector("#h_value");
const h_input = document.querySelector("#h_input");
const w_value = document.querySelector("#w_value");
const w_input = document.querySelector("#w_input");
h_value.textContent = h_input.value;
h_input.addEventListener("input", (event) => {
    h_value.textContent = event.target.value;
});
w_value.textContent = w_input.value;
w_input.addEventListener("input", (event) => {
    w_value.textContent = event.target.value;
});
/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#javascript */