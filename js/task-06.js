const textInput = document.querySelector('#validation-input');
const dataInputAtr = document.querySelector('[data-length]')
console.log(dataInputAtr);


textInput.addEventListener("blur", onCheckContentInput);

function onCheckContentInput(event) {
   // console.log(event.currentTarget.value.length);

   if (event.currentTarget.value.length === Number(dataInputAtr.dataset.length)) {
      textInput.classList.add('valid');
      textInput.classList.remove('invalid')
   }
   else {
       textInput.classList.add('invalid');
       textInput.classList.remove('valid')
   }
   
};


 console.log(textInput);