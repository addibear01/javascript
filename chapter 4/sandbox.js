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
const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speak();
speak('shaun', 'day');