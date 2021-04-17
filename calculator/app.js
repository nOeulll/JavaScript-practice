function addOutput(val){
    var display = document.getElementById("display");
    display.value += val;
}

function equal(){
    var display = document.getElementById("display");
    var result = eval(display.value);
    var displayResult = document.getElementById("result");
    displayResult.value += result; 
}
