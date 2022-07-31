const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithId = document.querySelector('#ingredients');
console.log(listWithId);

const elements = ingredients.map(ingredient => {
  const itemEL = document.createElement('li');
     
  itemEL.classList.add('item');
  itemEL.textContent = ingredient;
  
  return itemEL;
});
console.log(...elements);


listWithId.append(...elements);






