// alert('hello, world');
// console.log(1);
// console.log(2);
// let age = 25;
// let year = 2019;

// // log things to console
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);

// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('n');
console.log(index);

// common string methods
// let example = email.slice(2,5);
// let example = email.substr(4,10);
// let example = email.replace('m', 'w');
let example = email.replace('n', 'w');
console.log(example);

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10/2);
// let number = radius % 3;
// let number = pi * radius**2;

//order of operation - B I D M A S
// let number = 5 * (10-3)**2;

// console.log(number);

let likes = 10;

// likes = likes + 1;
// likes ++;
// likes --;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

console.log(likes);

//NaN not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

let answer = 'the blog has ' + likes + ' likes';
console.log(answer);


