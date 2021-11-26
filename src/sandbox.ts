/// Lesson 9

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: String) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello again`);
}

/// Lesson 10

// let greet: Function

// example 1
let greetF: (a: string, b: string) => void;
greetF = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string): number => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
type person = { name: string, age: number };
let logDetailsO: (obj: { name: string, age: number }) => void;
logDetailsO = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}