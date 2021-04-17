// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
print(ellie);

// JavaScript = Dynamically type language
// 동적으로 type이 runtime때 결정되는 언어
// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj['key']);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 2};
const person3 = {name: 'dave', age: 2};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
      // this = {};
    this.name = name;
    this.age =age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}
for(value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user2[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
// const user4 = {};
// Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit1 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 앞에 동일한 property가 있다면 뒤에 있는 값이 앞에 있는 값을 계속 덮어 씌운다.
console.log(mixed.color);
console.log(mixed.size);