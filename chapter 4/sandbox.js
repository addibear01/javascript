// function desclaration
// function greet(){
//     console.log('hello there');
// }

//function expression
// const speak = function(){
//     console.log('good day!');
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// function greet(){
//     console.log('hello there');
// }

// const speak = function(){
//     console.log('good day!');
// };

//arguments and parameters
// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('shaun', 'day');

//returning values
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){

// };

// calcVol(area);

// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow function
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

//regular function
// const greet = function(){
//     return 'hello, world';
// };
//arrow function
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

//regular function
// const bill = function(proudcts, tax){
//     let total = 0;
//     for(let i =0; i < proudcts.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
//arrow function
// const bill = (products,tax) => {
//     let total = 0;
//     for(let i =0; i < proudcts.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

// const name = 'shaun';

//functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

//methods

// let resultTwo = name.toUpperCase()
// console.log(resultTwo);

// callbacks and foreach

// const myFunc = (callbackFunc) => {
    //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
    //do something
//     console.log(value);
// });

// let people = ['mario', 'luogi', 'ryu', 'shaun', 'chun-li'];
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

// get a reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;

people.forEach(function(person){
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;