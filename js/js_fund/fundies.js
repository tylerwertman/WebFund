//String
var fName = "Tyler";

//Number
var age = 25;
var dec = 3.14;

//Boolean
var isHuman = "false";

//console logging
console.log("Addition " + age+dec);
console.log(age-dec);
console.log(age*dec);
console.log(age/dec);
console.log(fName+age);

//concatenation - traditional vs literal expressions
console.log("My name is " + fName + ", I am " + age + " years old")
console.log(`My name is ${fName}, I am ${age} years old`)

console.log(5+5);
console.log(10+5);

// write function that says hello to the user
// this function will take 1 parameter which will be the users name
// function should console.log(Hello [username], happy wednesaday)

var name = 'Jordan';

//parameters
function welcome(name, day) {
    //traditional concatenation vv
    console.log("Hello " + name + ", happy " + day + "!");
    
    //below is called expression literal vv
    console.log(`Hello ${name}, happy ${day}!`)

}
//arguments
welcome("tyler", "Wednesday");


//function to multiply two numbers

function mult(a,b) {
    console.log(a*b);
}

mult(69, 420);

//fn to multiply 2 numbers that are both > 5

function mult5(x,y) {
    if(x > 5 && y > 5) {
        console.log(x*y)
    }
    else if (x<5 && y<5){
        console.log("nums too small.. diy")
    }
    else {
        console.log("bro it's numbers only")
    }
}
mult5(2,3);
mult5(6,9);
mult5("huh");

//declare function with 2 parameters
function addNum(a, b){
    //console.log
    return a + b;
}
var result = addNum(420,69);
console.log(result);

function counter(startNum) {    //The function is expecting some PARAMETER in order to run
    for (var num = startNum ; num >= 0 ; num--) {        
        console.log(num);    
    }
}
counter(6);
counter(3);

function createArray(num) {        
    var newArray = [];       
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }
    return newArray;
}
var y = createArray(5);
console.log(y);

// = vs == vs ===
//Single = is used to set a value
//Double and Triple = are used for comparison
console.log(5 == "5")
//True because double-equals is not strict about data type (string vs int)
console.log(5 === "5")
//False because triple-equals is strict about data types