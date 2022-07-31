const inputEl = document.querySelector('#name-input');
console.log(inputEl.value);

const spanEL = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
if (inputEl === null) {
    spanEL.textContent('Anonymous');
}

    spanEL.textContent = event.currentTarget.value;

});


