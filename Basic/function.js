// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();
function log(message) {
  console.log(message);
}
log('Hello');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for(const arg of args){
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// JS scope: 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
  // return undefined;
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
};
// anonymous function
const printYes = function () {
  console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  // print(); // 필요할 때 사용하면 됨
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b; // Arrow
const add = function (a, b) {
  return a + b;
}; // Expression

const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  if(command === 'add') {
    return a + b;
  } else if(command === 'sub') {
    return a - b;
  } else if(command === 'divi') {
    return a / b;
  } else if(command === 'mul') {
    return a * b;
  } else if(command === 'rem') {
    return a % b;
  } else {
    console.log(`can't calculate`);
  }
}

// 정해진 데이터를 처리하는 경우 if문 보다는 switch문을 활용하는게 더 좋음
function calculate2(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    case 'divi':
      return a / b;
    case 'mul':
      return a / b;
    case 'rem':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate2('add', 2, 3));