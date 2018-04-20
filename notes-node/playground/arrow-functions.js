//traditional
// var square = (x) => {
//     var result = x * x;
//     return result;
// };

//basic
var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Jaini',
    //this binding keyword and arguments does not bound in arrow functions
    sayHi : () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.sayHiAlt(1,2,3);