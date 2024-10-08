// object literals

// const blogs = [
//     {title: 'why mac and cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [{title: 'why mac and cheese rules', likes: 30},
//             {title: '10 things to make with marmite', likes: 50}],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);
// user.login();
// user.logout();
// const name = 'mario';
// name.toUpperCase();

// console.log(user);
// console.log(user.name);
// user.age = 35;
// console.log(user.age);
// const key = 'location';
// console.log(user['location']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

//Math object
// console.log(Math);
// console.assertlog(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
userOne.name = 'chun-li';
console.log(userOne, userTwo);