const priceAdd   = document.querySelectorAll('.price-add');
const memory     = document.querySelectorAll('#memory');
const storage    = document.querySelectorAll('#storage');
const priceValue = document.querySelector('.price-value');

let priceFirst  = 208800;
let addMemory;
let addStorage;

// for(let i = 0; i < priceAdd.length; i++) {
//   priceAdd[i].addEventListener('change', ()=> {

//     priceFirst = 208800;

//     for(let indexMemory = 0; i < memory.length; indexMemory++) {
//         addMemory  = memory[indexMemory].dataset.memory;
//         console.log(addMemory);
//     }

//     for(let indexStorage = 0; i < storage.length; indexStorage++) {
//       addStorage  = storage[indexStorage].dataset.storage;
//       console.log(addStorage);
//     }

//     priceFirst = priceFirst + Number(addMemory) + Number(addStorage);

//   })
// }

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
