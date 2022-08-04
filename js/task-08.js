const formRef = document.querySelector('.login-form');
// console.log()
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

  

    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email.value;
    const password = formElements.password.value;

};
//   const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log(name);
//         console.log(value);
//     });