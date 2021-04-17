const hello1 = function(){
    console.log('hello1');
};

console.log(hello1, typeof hello1);

const hello2 = function(name){
    console.log('hello2', name);
};

const hello3 = function(name){
    return `hello3 ${name}`;
};

console.log(hello3('Mark'));
