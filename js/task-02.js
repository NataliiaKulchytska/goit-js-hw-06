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

function getListContent() {
  let result = [];

  for(let i=1; i<=6; i++) {
    let li = document.createElement('li');
    li.append(i);
    li.className = "item";
   
    result.push(li);
    
    for (const ingredient of ingredients) {
      console.log(ingredient);
       li.innerHTML = ingredient;
}
    // for (let i = 1; i <= ingredients; i+= 1){
    //   li.innerHTML += li.push('[i]');
    // }
  
  
  }

  return result;
}

listWithId.append(...getListContent());







