// arrays
let names = ['luigi', 'mario', 'yoshi'];
// names = 'hello'; // error

names.push('toad');
// names.push(3); // error
// names[1] = 3;

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push('shuan'); //error
// numbers[1] = 'shuan';

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu'); //ok
mixed.push(10);
mixed[1] = 3;


// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
}

ninja.age = 40;
ninja.name = 'ryu';
// ninga.age = '30'; //error
// ninja.skills = ['fighting', 'sneaking']; // can't add additional properties

// ninja = ''; // error
ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 49,
}

// ninja = { // error
//   name: 'yoshi',
//   belt: 'orange',
//   // age: 49,
// }

// ninja = { // error
//   name: 'yoshi',
//   belt: 'orange',
//   skills: [],
// }