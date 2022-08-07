function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestro: document.querySelector('button[data-destroy]'),
  divObject: document.querySelector('#boxes'),
}
let numberElBox = 0;

refs.btnCreate.addEventListener('click', onCreateBtn);
refs.btnDestro.addEventListener('click', onDestroyBtn);

function onCreateBtn() {

const min = Number(refs.inputEl.min);
  const max = Number(refs.inputEl.max);

  numberElBox = refs.inputEl.value;

  if (numberElBox < min) {
    return alert('Поставьте число больше')
  }
  else if (numberElBox > max) {
    return alert(`количество не должно превышать ${max}`);
  }

  refs.divObject.innerHTML = createBoxes(numberElBox).join(''); 
 
};

function onDestroyBtn() {
  // refs.divObject.remove();
   refs.divObject.innerHTML = '';
  refs.inputEl.value = ''; 
};

function createBoxes(amount) {
  const box = [];

  for (let i = 1; i <= amount; i += 1){
   
    const boxSize = 30 + 10 * i;
    const boxColor = getRandomHexColor();
    const newBox =
     `<div class="div-${i+1}">
      <style>
        .div-${i+1} {
          width: ${boxSize}px;
          height: ${boxSize}px;
          background-color: ${boxColor};
          display: inline-block;
          margin-right: 15px
        }
      </style>
    </div>`;
    box.push(newBox);
  }
  return box;
};
