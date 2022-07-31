const listWithId = document.querySelector('#categories');
// console.log(listWithId);
console.log('Number of categories:',listWithId.children.length)

const itemEl = listWithId.querySelectorAll('.item');

const titleEl = itemEl.firstElementChild;

const element = itemEl.lastElementChild;
console.log(`Category: ${titleEl} Elements: ${element}`);

