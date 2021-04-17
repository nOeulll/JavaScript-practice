// 표준 내장 객체 : Array
// 객체가 이미 런타임 환경에 만들어져 있는 것
// Object, Function, Boolean, Array...

const a = new Array('red', 'black', 'white');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red', 'green', 'yellow'];


console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b.slice(0, 1));
console.log(Array.prototype.slice, Object.prototype.slice);
// prototype 체인 상 Object에 있는 게 아니라, 
// Object를 prototype 체인으로 받아온 Array가 따로 또 구현을 추가한 함수인 것.