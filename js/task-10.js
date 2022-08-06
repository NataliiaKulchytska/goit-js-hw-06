function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestro: document.querySelector('button[data-destroy]'),
  divObject: document.querySelector('#boxes'),
}
  
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestro.addEventListener('click', destroyBoxes);

function createBoxes(amount) {


  
  for (let i = 1; i = amount; i += 1){
    refs.divObject.createElement('div[i]');
  }
 
};

function destroyBoxes() {
  refs.divObject.remove();
};
