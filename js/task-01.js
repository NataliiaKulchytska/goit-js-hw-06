const listWithId = document.querySelector('#categories');
// console.log(listWithId);
console.log('Number of categories:',listWithId.children.length)

const itemEl = listWithId.querySelectorAll('.item');
console.log(`Category: ${itemEl.children} Elements: ${itemEl.lastElementChild} `);

