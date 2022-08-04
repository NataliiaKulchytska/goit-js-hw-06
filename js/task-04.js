const div = document.querySelector('#counter');

const refs = {
   decrementBtn: document.querySelector('button[data-action="decrement"]'),
   incrementBtn: document.querySelector('button[data-action="increment"]'),
   spanCounter: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click',  onDecrementButtonClick);
refs.incrementBtn.addEventListener('click', onIncremenButtonClick);

let counterValue = 0;

function onDecrementButtonClick() {
   
   counterValue -= 1;
   refs.spanCounter.textContent = `${counterValue}`;


};
function onIncremenButtonClick() {
   
   counterValue += 1;
   refs.spanCounter.textContent = `${counterValue}`;
};
