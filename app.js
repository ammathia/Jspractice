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

    static mergeComment(first, second) {
        return `${first} ${second}`;
    }
}

const firstComment = new Comment("First Comment");

//console.log(firstComment instanceof Comment);
//console.log(firstComment instanceof Object);

/*
console.log(firstComment.votesQt);
firstComment.upvote();
console.log(firstComment.votesQt);
console.log(firstComment);
console.log(firstComment.hasOwnProperty('text'));
console.log(firstComment.hasOwnProperty('votesQt'));
console.log(firstComment.hasOwnProperty('upvote'));
console.log(Comment.mergeComment("First.", "is second"));
*/

/*
console.log(firstComment);
console.log(firstComment.__proto__ === Comment.prototype);
*/


/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(error => console.error(error));
*/



/*

const myPromise = new Promise(function (resolve, reject) {
    console.log("Requesting data");
    setTimeout(() => {
        console.log("Preparing data");
        const myObject = {
            name: "John",
            age: 23,
            city: "New-York",
        };
        resolve(myObject);
    }, 2000);
});


myPromise.then(data => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            data.isSigned = true;
            resolve(data);
        }, 2000);
    })
})
.then((clientData) => {
    console.log("Data modified and returned", clientData);
    clientData.isPromise = "yes";
    return clientData})
.then((data) => {
    console.log("Data modified and returned x2", data);
})
.catch(err => console.error("Error", err))
.finally(() => console.log("Finally"))

*/

/*
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};



Promise.all([sleep(2000), sleep(5000)]).then(() => {console.log("All promises done")});
Promise.race([sleep(2000), sleep(5000)]).then(() => {console.log("Race is done after 2 seconds")});

function asd() {
    let x = 2;
    return x;
}
b 
console.log(asd());

*/

/*
const asyncFn = async () => {
    //throw new Error('Text of the Error')
    return "Success";
}

asyncFn()
.then(value => console.log(value))
.catch(value => console.log(value))
*/


/*
const function1 =  () => 
  new Promise((resolve, reject) => 
   setTimeout(() => resolve(), 2000));


const asyncFn = async () => {
    console.log('Timer starts');
    let timer1 = Date.now();
    await function1();
    let timer2 = Date.now();
    console.log("Timer ends", timer2 - timer1);
}; 
asyncFn()
.then(() => console.log("Promise of asyncFn() fullfilled"));

*/


console.log("timer starts");
let timer1 = performance.now();
let timer2 = performance.now();
let time = timer2 - timer1;
console.log("Timer ends", time);


setTimeout(function Date() {
    let timer2 = performance.now();
    let time = Math.round(timer2 - timer1);
    console.log("Timer ends", time);
}, 2000)


function bet() {
    return new Promise(function(resolve, reject) {

    })
}