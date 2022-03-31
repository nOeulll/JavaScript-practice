// 함수
function square (number) {
    return number * number
}
console.dir(square)


// 1. es6 이전의 모든 함수는 callable 이면서 constructor 이다.
// es6 이전의 함수는 사용 목적에 따라 명확한 구분이 없어서 호출 방식에 특별한 제약이 없고 생성자 함수로 호출되지 않아도 프로토타입 객체를 생성한다.
// 이는 실수를 유발할 가능성이 있고 성능에도 좋지 않다.

// 2. es6메서드
// 인스턴스를 생성할 수 없는 non-constructor 이다.
// 따라서 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
// 따라서 생성자 함수로서 호출할 수 없다.

const obj = {
    x: 1,
    foo() { return this.x},
    bar: function () { return this.x}
}

new obj.foo(); //Uncaught TypeError: obj.foo is not a constructor
new obj.bar();

// constructor 가 아닌 es6 메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty('prototype') // false

// constructor 인 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty('prototype') // true

// 3. 화살표 함수
// 함수 표현식으로 정의
const multiply = (x, y) => x * y;
multiply(2, 3)

const sum3 = (a, b) => {
    let result = a + b;
    result += 3
    return result;
}

// 인스턴스를 생성할 수 없는 non-constructor 이다.
const Foo = () => {};
new Foo(); // typeError
// 따라서 prototype 프로퍼티도 없고 프로토타입도 생성하지 않는다.
Foo.hasOwnProperty('prototype') // false

// 중복된 매개변수 이름을 선언할 수 없다.
// 일반함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
function normal(a, a) { return a + a; }
const arrow = (a, a) => a + a // syntaxError

// 화살표 함수는 자체의 this, arguments, super, new, target 바인딩을 갖지 않는다.
// 따라서 화살표 함수 내부에서 this, arguments, super, new, target 을 참조하면 스코프 체인을 통해 상위 스코프의 this, arguments, super, new, target 을 참조한다.

const person1 = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
}
person1.sayHi() // Hi
// 화살표 함수 내부의 this 는 호출한 객체인 person1 을 가리키지 않고 상위 스코프인 전역의 this 가 가리키는 전역 객체를 가리킨다.
// 따라서 메서드를 정의할 때는 es6 메서드 축약 표현으로 정의한 es6메서드를 사용하는 것이 좋다.


const person2 = {
    name: 'Lee',
    sayHi() {
        console.log(`Hi ${this.name}`)
    }
}

person2.sayHi() // Hi Lee

//


// 4. Rest parameter
function foo (...rest) {
    console.log(rest) // 함수에 전달된 인수들의 목록을 배열로 전달받는다.
}

foo(1, 2, 3, 4, 5)

// 반드시 마지막 파라미터여야 한다.
function foo1 (x, y, ...rest) {
}
// rest 파라미터는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
console.log(foo1.length) // 2


// 5. 매개변수 기본값
function sum(x, y) {
    return x + y;
}

function sum1(x = 0, y = 0) {
    return x + y;
}

console.log(sum1(1, 2)) // 3
console.log(sum(1)) // NaN
console.log(sum1(1)) // 1
