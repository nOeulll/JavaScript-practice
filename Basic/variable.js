// JavaScript is very flexible
// flexible === dangerous


// 1. Use Strict
// added ECMAScript 5
'use strict';
console.log('Hello World!');

let a;
a = 6;

// 2. Variable, rw(read/write)
// let(added in ES6)
// - mutable data type
let globalname;
{
let name = 'ellie';
console.log(name);
}
console.log(name);

// var hoisting(move dclaration from bottom to top)
{
age = 4;
var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive(값 자체가 메모리에 저장됨), single item: number, string, boolean, null, undefined, symbol
// object(object를 가리키는 레퍼런스가 저장됨), box container
// function, first-class function

// string
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value;
const test = 3 < 1; //false
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
// null로 값이 할당되어짐

// undefined
let x = undefined;
// or
let x;
// 선언은 되었지만 아무런 값이 지정되지 않음

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// object, real-life object, data structure

// 5. Dynamic typing: dynamically typed language;
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '5';
console.log(`value: ${text}, type: ${typeof text}`);

