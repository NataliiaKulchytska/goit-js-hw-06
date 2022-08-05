const textInput = document.querySelector('#validation-input');
// console.log(textInput);


textInput.addEventListener("blur", onCheckContentInput);

function onCheckContentInput() {
   textInput.textContent.length === textInput[data-length]
          ? textInput.valid
          : textInput.invalid;
};


 console.log(textInput);