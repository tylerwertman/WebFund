num1 = "0";
num2 = "0";
op = "";
placeholder = "";
placeholder2 = "";
screen = document.querySelector("#display");

function press(value){
    console.log("press begin: num1 is "+num1);
    console.log("press begin: num2 is "+num2);
    console.log("press begin: op is "+op);
    // console.log(result);
    
    if (op != "+" && op != "-" && op != "/" && op != "*"){
        // placeholder+=value;
        num1+=value;
        screen.innerText = Number(num1);
        console.log("press for num1: num1 is "+num1);
        console.log("press for num1: num2 is "+num2);
        console.log("press for num1: op is "+op);
        // console.log(result);

        // return num1
    }else{
        // placeholder2+=value;
        num2+=value;
        screen.innerText = Number(num2);
        console.log("press for num2: num1 is "+num1);
        console.log("press for num2: num2 is "+num2);
        console.log("press for num2: op is "+op);
        // console.log(result);

        // return num2;
    }
}
function setOP(value){
    if (op == "+" || op == "-" || op == "/" || op == "*"){
        num1 = num2;
        num2 = "0";
    }
    op = value;
    // num2 = "0";
    console.log("setop: num1 is "+num1);
    console.log("setop: num2 is "+num2);
    console.log("setop: op is "+op);
    // console.log(result);
    
    return op;
}
function clr(value){
    // console.log(value);
    screen.innerText = 0;
    op = "";
    num1 = "0";
    num2 = "0";
    
    // console.log(result);

    // placeholder = "";
    // placeholder2 = "";
}
function calculate(value){
    if (op == "+"){
        result = num1+num2;
    }else if (op == "-") {
        result = num1-num2;
    }else if (op == "*") {
        result = num1*num2;
    }else if (op == "/") {
        result = num1/num2;
    }
    console.log("equals early: num1 is "+num1);
    console.log("equals early: num2 is "+num2);
    console.log("equals early: op is "+op);
    // console.log(result);
    
    screen.innerText = result;
    num1=result;
    num2="0";
    op = "";
    console.log("equals late: num1 is "+num1);
    console.log("equals late: num2 is "+num2);
    console.log("equals late: op is "+op);
}