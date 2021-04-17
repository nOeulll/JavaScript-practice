const hello1 = () => {
    console.log('hello1');
};

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name => {
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};

// 함수 리턴
const hello4 = name => {
    // 중간에 로직이 있다면 중괄호를 사용
    return `hello4 ${name}`;
};

// 중간에 로직이 없다면 간략하게 중괄호 생략 가능
const hello5 = name => `hello5 ${name}`;