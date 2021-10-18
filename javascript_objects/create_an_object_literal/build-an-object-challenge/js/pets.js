/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  { name: 'Oz',
    type: 'Dog',
    breed: 'aussie',
    age: 6,
    photo: 'img/aussie.jpg'
  },
  { name: 'Dashing',
    type: 'Dog',
    breed: 'dachshund',
    age: 2,
    photo: 'img/daschund.jpg'
  },
  { name: 'Goldie',
    type: 'Dog',
    breed: 'golden',
    age: 10,
    photo: 'img/golden.jpg'
  },
  { name: 'Perry',
    type: 'Cat',
    breed: 'persian',
    age: 1,
    photo: 'img/persian.jpg'
  },
  { name: 'Bruce',
    type: 'Dog',
    breed: 'pug',
    age: 6,
    photo: 'img/pug.jpg'
  },
  { name: 'Tabatha',
    type: 'Cat',
    breed: 'tabby',
    age: 7,
    photo: 'img/tabby.jpg'
  },
]

for ( let i = 0; i < pets.length; i++ ) {
  let pet = pets[i];
  let name = pets[i].name;
  let type = pets[i].type;
  let breed = pets[i].breed;
  let age = pets[i].age;
  let photo = pets[i].photo;
}


let HTML = `
<h2>${name}</h2>
<h3>${type} | ${breed}</h3>
<p>${age}</p>
<img src=${photo} alt=${breed}
`

document.querySelector('main').innterHTML = HTML;