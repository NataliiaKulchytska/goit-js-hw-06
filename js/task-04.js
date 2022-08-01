const div = document.querySelector('#counter');
console.log(div);

const actions = document.querySelectorAll('button');
console.log(actions);

const spanEl = document.querySelector('#value');


const counterValue = 0;
actions.addEventListener('click', () => {
    if ('click' === actions[0].dataset.actions) {
        counterValue -= actions[0].dataset;
    } else {
        counterValue += actions[1].dataset;
    }
    
});

// console.log(spanEl);