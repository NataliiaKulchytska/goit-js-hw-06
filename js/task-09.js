function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBgColor = document.querySelector('body');
const spanRef = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', changeColor);

function changeColor(event) {
  bodyBgColor.style.backgroundColor = getRandomHexColor();
 
  spanRef.textContent = getRandomHexColor(event);
};
//  console.log(spanRef);

