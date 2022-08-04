const inputEl = document.querySelector('#name-input');
console.log(inputEl.value);

const spanEL = document.querySelector('#name-output');

inputEl.addEventListener('input', inputChange);

function inputChange  (event)  {
    if (event.currentTarget.value !== '') {
        spanEL.textContent = event.currentTarget.value;
    }
    else {
         spanEL.textContent = 'Anonymous';
    }
   
};
     

   



