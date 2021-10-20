
let html = '';

// for ( let i = 0; i < pets.length; i++ ) {
//   let pet = pets[i];
//   html += `
//   <h2>${pet.name}</h2>
//   <h3>${pet.type} | ${pet.breed}
//   <p>${pet.age}</p>
//   <img src =${pet.photo} alt=${pet.breed}>
//   ` 
// };

// console.log(html);

// document.querySelector('main').innerHTML = html;





// Practice / Reminder
for ( let i = 0; i < pets.length; i++ ) {
  let html = '';
  html += `
  <h2>${pets[i].name}</h2>
  <h3>${pets[i].type} | ${pets[i].breed}</h3>
  <p>${pets[i].age}</p>
  <img src=${pets[i].photo}>
  `
}