const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text'); 
inputRef.addEventListener('input', onLicenseChange);

function onLicenseChange() {
    textRef[font-size] = inputRef[font-size];
};
console.log(textRef);