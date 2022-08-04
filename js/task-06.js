const textInput = document.querySelector('#validation-input');
// console.log(textInput);


textInput.addEventListener("blur", onCheckContentInput);

function onCheckContentInput(event) {
   textInput.textContent.length === event.dataset.length
          ? textInput.valid
          : textInput.invalid;
}


 console.log(textInput);