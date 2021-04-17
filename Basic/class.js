'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar(문법상으로 달달한) over prototype-based inheritance

// JavaScript MDN reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 생성자를 사용하지 않고 field를 정의할 수 있음
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// 들어오는 데이터에 상관 없이 공통적으로 사용할 수 있는 속성이나 메서드를 선언할 때 사용(메모리의 사용을 줄여줌)
class Article {
  static publisher = 'Dream Coding'; //class 자체에 붙어있음.
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  };
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 클래스의 instance(해당 클래스로부터 만들어진 객체)가 맞는지 아닌지를 판별해줌(true, false)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);