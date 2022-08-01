const listWithId = document.querySelector('#categories');
// console.log(listWithId);
console.log('Number of categories:',listWithId.children.length)

const itemEl = listWithId.querySelectorAll('.item');

const titleEl = listWithId.querySelectorAll('h2');;
console.log(...titleEl);

const element = document.querySelectorAll(titleEl.nextSibling);
console.log(`Category: ${titleEl} Elements: ${element.children}`);

