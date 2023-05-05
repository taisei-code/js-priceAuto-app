const memory     = document.querySelectorAll('#memory');
const storage    = document.querySelectorAll('#storage');
const priceValue = document.querySelector('.price-value');

let priceFirst  = 208800;
let addMemory;
let addStorage;

for(let i = 0; i < memory.length; i++) {
  memory[i].addEventListener('change', () => {
    priceFirst = 208800;
    addMemory = memory[i].dataset.additionalAmount;
    priceFirst = priceFirst + Number(addMemory);
    console.log(priceFirst)
    priceValue.textContent = priceFirst;
  })
}

for(let i = 0; i < storage.length; i++) {
  storage[i].addEventListener('change', () => {
    let add = storage[i].dataset.additionalAmount;
    console.log(add);
  })
}