const div = document.querySelector('#counter');
console.log(div);

const actions = document.querySelectorAll('button');
console.log(actions);

const spanEl = document.querySelector('#value');
for (action of actions) {
    if ('click' === actions[0].dataset.actions) {
 spanEl += actions[0].dataset;
}
spanEl += actions[1].dataset;
};

console.log(spanEl);