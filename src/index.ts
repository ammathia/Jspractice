class Rectangle {
    name: string;
    age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;

    }


}

let a1 : Rectangle = new Rectangle("Bob",42);

console.log(a1);