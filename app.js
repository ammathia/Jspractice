"use strict"




/*const name = "sfas";
const post = 12;

let a = {
    name,
    post,
    ischan: false,
}

for ( let key in a) {
    alert(a[key]);
}*/


/*const post = {
    name: "asf",
    age: 21,
    pars: {
        tape: 21,
    },
    fasf: true,
    bigInt: 3245678986354890878654,

};


//const post1 = Object.assign({}, post);
//const post1 = {...post};
const post1 = JSON.parse(JSON.stringify(post));
/*let post1 = {};
for ( let key in post) {
    post1[key] = post[key];
}
post1.pars.tape = 333;
console.log(post);
console.log(post1);*/


/*function multi( value, multiplier = 1) {
    return value * multiplier;
}*/


/*const multi = function(value, multiplier = 1) {
    return value * multiplier;
}*/


/*const multi =  (value, multiplier = 1) => { 
    return value * multiplier;
}

alert(console.dir(multi));*/

/*
const Oldpost = {
    name: "Ded",
    age: 23,
};

const newPost = (post, Date = Date()) => ({
    ...post,
    Date,
});

const newPost1 = function(post, Date1 = Date()) {
    return {
        ...Oldpost,
        Date1,
    };
};

let result = newPost(Oldpost);
console.table(newPost1(Oldpost));
*/


/*
let obj1 = {
    exactDate: Date(),
};

console.table(obj1);
*/

/*
const thrSomeError = () => {
    throw new Error('My Error');
};


try {
    thrSomeError();
} catch (error) {
    console.log("sdg");
}
console.error(error);
*/

/*
let myArray = [1,2,3];

//myArray.forEach(el => console.log(el*2));
const newArray = myArray.map(el => el * 3);
console.log(myArray);
console.log(newArray);
*/

/*
const myObject = {
    name: 'Bogdan',
    age: 23,
    isSigned: true,
};

const { name, age } = myObject;
alert(name);
*/

/*
const myArray = ['apple', 'mango'];

const [ fruitone, fruittwo ] = myArray;

alert(fruitone);
*/

/*
function userProfile({name, age, isSigned}) {
    if (isSigned) {
    alert(`${name} is ${age} years old!!`);    
} else {
        alert(`${name} is not ${age} years old!!`);    
    }
}

userProfile(myObject);
*/

/*
const myObject = {
    x: 12,
    y: 'eg',
    z: 'sdf'
};

const myArray = Object.keys(myObject);

/*
//console.log(Object.keys(myObject));

/*
Object.keys(myObject).forEach(element => {
    console.log(element, myObject[element]);
});

alert(Object.keys(myObject));
*/
const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

//export  {sum, mult};


class Comment {
    constructor(text) {
        this.text = text;
        this.votesQt = 0;
    }

    upvote() {
        this.votesQt += 1;
    }
}

const firstComment = new Comment("First Comment");

console.log(firstComment);
console.log(firstComment instanceof Comment);
console.log(firstComment instanceof Object);