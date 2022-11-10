//Periodic Table
function textChange(element) {
    if (element.innerText=="Periodic Table (kinda)") {
        // console.log(element.innerText);
        element.innerText="Periodic Table (sorta)";
    }
    else if (element.innerText=="Periodic Table (sorta)"){
        // console.log(element.innerText);
        element.innerText="Periodic Table (maybe)";
    }
    else {
        // console.log(element.innerText);
        element.innerText="Periodic Table (kinda)";
    }   
}

function displayElement(elementName){
    console.log(elementName);
    alert(elementName);
}

//jsBtns
function spellChange(element) {
    if (element.innerText=="Buttons") {
        element.innerText="Buddinz";
    }
    else {
        element.innerText="Buttons";
    }   
}
function increaseAge(element) {
    // console.log(element.innerText);
    // console.log(typeof(element.innerText));
    if (element.innerText<27) {
        element.innerText++;
    }
    else {
        element.innerText=25;
    }
}
function increaseAge2(element) {
    // console.log(element.innerText);
    // console.log(typeof(element.innerText));
    var age = parseInt(element.innerText);
    if (age <27){
        age++;
    }
    else {
        age=25;
    }
    element.innerText=`${age} years old`;
}

function example(element) {
    console.log("user clicked a specific element", element);
}
function turnOff(element) {
    element.innerText = "I was On. Now I am Off";
}
function turnOn(element) {
    element.innerText = "I was Off. Now I am On";
}
var isOn = true;
function toggleOffOn(element) {
    if (isOn == true) {
        element.innerText = "I am Off. I toggled from On.";
        isOn = false;
        console.log("isOn is now false.");
    }
    else {
        element.innerText = "I am On. I toggled from Off.";
        isOn = true;
        console.log("isOn is now true.");
    }
}

function hide(element) {
    element.remove();
}
function addShadow(element) {
    element.classList.add("shadow");
}
function removeShadow(element) {
    element.classList.remove("shadow");
}

function trippyOver(element) {
    element.style.backgroundColor = "cyan";    
    element.style.color = "red";
    element.innerText = "mouseover this trippy box!"
}
    
function trippyOut(element) {
    element.style.backgroundColor = "red";    
    element.style.color = "cyan"; 
}

var count = 1;
var countElement = document.querySelector("#count");
console.log(countElement);

function add1(){
    count++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}
function sub1(){
    count--;
    countElement.innerText = "The count is " + count;
    console.log(count);
}
var colorImg = document.querySelector("#fav-color");

console.log(colorImg);

function pickBlue(element) {
    colorImg.src = "blue.png";
    element.classList.add("blueIt");
    document.getElementById("red").classList.remove("redIt");
    // console.log(document.getElementById("red").classList);
    // document.getElementById("red").style.color = "limegreen";
    // document.getElementById("red").style.fontWeight = "normal";
    // console.log(colorImg.src);
    // console.log(element);
}
function pickRed(element) {
    colorImg.src = "red.png";
    // element.style.color = "red";
    // element.style.fontWeight = "bold";
    element.classList.add("redIt");
    document.getElementById("blue").classList.remove("blueIt");
    // document.getElementById("blue").style.color = "limegreen";
    // document.getElementById("blue").style.fontWeight = "normal";
    // console.log(colorImg.src);
    // console.log(element);
}

function darkLightToggle(element) {
    if(element.classList.contains("light-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("light-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("light-mode");
    }
}

//select popup div
var popup = document.querySelector(".popup")

//call popup after 1000ms
setTimeout(function () {
    popup.style.display = "block";
}, 1000)

function removePopup() {
    // popup.style.display = "none"; // also works
    popup.remove();
}

function searchAlert(event, element) {
    event.preventDefault(); // prevents default browser refresh on form submit
    var formData = new FormData(element);
    console.log(formData.get('search-bar'));
    alert(formData.get('search-bar'));
}

var nameSpan = document.querySelector("#myName");
var foodToOrder = "pizza";

function setName (element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}

function pickFood (element) {
    console.log("the food is " + element.value);
    foodToOrder = element.value;
}

function order () {
    alert("ordering a " + foodToOrder);
}