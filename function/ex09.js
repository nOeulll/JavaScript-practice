function hello(c){
    console.log('hello');
    b();
};

hello(function() {
    console.log('콜백');
}, 1);