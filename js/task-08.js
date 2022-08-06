const formRef = document.querySelector('.login-form');
// console.log()
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

   const {
    elements: { email, password }
   } = event.currentTarget;  
 
  
        if (email.value === "" || password.value === "") {
 return alert('Please fill in all the fields!');
        }
    const formData = new FormData(event.currentTarget);
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`);
 

  event.currentTarget.reset();
};
