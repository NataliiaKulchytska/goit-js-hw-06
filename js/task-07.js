const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text'); 

inputRef.addEventListener('input', onLicenseChange);


function onLicenseChange(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
};
console.log(textRef);