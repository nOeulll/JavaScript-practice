// 객체 리터럴

const a = {};
// 객체를 만들 때 마치 값으로, 혹은 불린 값으로 썼던 것 처럼, a라는 객체를 객체로 직접 써서 만든다는 것.
// 문자 그대로를 객체로 사용한 것이 객체로 만들어지는 기능

console.log(a, typeof a);

const b = {
    name: 'Mark'
};

console.log(b, typeof b);

const c = {
    name: 'Mark',
    hello1() {
        console.log('hello1', this);
    },
    hello2: function() {
        console.log('hello2', this);
    },
    hello3: () => {
        console.log('hello3', this);
    }
};

c.hello1();
c.hello2();
c.hello3();