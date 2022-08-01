const listWithId = document.querySelector('#categories');
// console.log(listWithId);
console.log('Number of categories:',listWithId.children.length)

const itemEl = listWithId.querySelectorAll('.item');

const finalResult = itemEl => {
    itemEl.forEach(element => {
        const titleEl = listWithId.querySelector('h2');
        console.log('Category:', titleEl.textContent); 
        
        const elResult = element.querySelector('ul');
        console.log('Elements:', elResult.children.length)
    }); 
}
finalResult(itemEl);

