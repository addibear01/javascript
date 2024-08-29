// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);
user.login();
user.logout();
const name = 'mario';
name.toUpperCase();

console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);
const key = 'location';
console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
