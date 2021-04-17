// prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello', this.name, this.age);
    // }
}

const a = new Person('qw', 30);
// a.hello();

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age);
};

const p = new Person('Mark', 37);

p.hello();

const s = new Person('hj', 25);
s.hello();


console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);