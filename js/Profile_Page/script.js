// Vars for recurring objects
// var NLB = document.querySelector(".navLinks button");
var ML1 = document.querySelector(".mainLeft1");
var ML2 = document.querySelector(".mainLeft2");
var MR1 = document.querySelector(".mainRight1");
var MR2 = document.querySelector(".mainRight2");
var MR1HA = document.querySelector(".mainRight1Head a");


// Function: Clicking "Log In" button will:
// a) flip-flop button text between "Log In" & "Signout"
// b) reveal the 4 content cards (with logic to keep "Connection Requests"
// hidden if there are none remaining.)
function logIn(element) {
    if(element.innerHTML == "Log In") {
        element.innerHTML = "Sign Out";
        ML1.style.display = "block";
        ML2.style.display = "block";
        MR2.style.display = "block";
        if (MR1HA.innerText > 0){
            MR1.style.display = "block";
        }
        else if (MR1HA.innerText == 0){
            MR1.style.display = "none";
        }
    }
    else if (element.innerHTML == "Sign Out") {
        element.innerHTML = "Log In";
        MR1.style.display = "none";
        MR2.style.display = "none";
        ML1.style.display = "none";
        ML2.style.display = "none";
    }
}

// Function- Clicking "edit profile" will fill in user's profile pic, location and bio
// Originally it was logic-based and would only work after `logIn`, but then I decided to hide the cards before `logIn`
function editProfile(element) {
    // if(document.querySelector(".navLinks button").innerHTML == "Sign Out") {
        document.querySelector(".mainLeft1Head img").src = "./images/me.jpg";
        document.querySelector(".mainLeft1Body img").src = "./icons/map-marker.png";
        document.querySelector(".mainLeft1Body img").alt = "marker icon";
        document.querySelector(".mainLeft1Body span").innerHTML = "New York";
        document.querySelector(".mainLeft1Body p").innerHTML = "Developer | Engineer | Problem Solver <br> Master of shadows and the Internet!";
    // }
}

// Clicking the checkmark image-icon on a Connection Request will remove that CR and increase the 'Your Connections' number

function accept(element) {
    var crNum = Number(MR1HA.innerText)-1;
    MR1HA.innerText = crNum;
    document.querySelector(".mainRight1Body li").remove();
    document.querySelector(".mainRight2Head a").innerHTML = Number(document.querySelector(".mainRight2Head a").innerHTML)+1;
    if(MR1HA.innerText == 0){
        MR1.style.display = "none";
    }
}

// Clicking the 'x' image-icon on a Connection Request will remove that CR

function deny(element) {
    var crNum = Number(document.querySelector(".mainRight1Head a").innerText)-1;
    MR1HA.innerText = crNum;
    document.querySelector(".mainRight1Body li").remove();
    if(MR1HA.innerText == 0){
        MR1.style.display = "none";
    }
}

// select popup div
var popup = document.querySelector(".popup")

// This will display the popup after 1500ms
setTimeout(function () {
    popup.style.display = "block";
}, 1500)

// This will hide the popup after 10000ms if it could not be clicked
setTimeout(function () {
    popup.style.display = "none";
}, 10000)

// Clicking "OK" will dismiss the popup
function removePopup() {
    // popup.style.display = "none"; // also works
    popup.remove();
}

// Hovering "OK" will trigger the prank
function movePopup(element){
    var random = Math.floor((Math.random()*10));
    console.log(random);
    document.querySelector(".popup h2").innerText = 'Try again!';
    if (random==0){
        popup.style.left = "20px";
        popup.style.top = "20px";
    }
    else if (random==1) {
        popup.style.left = "40px";
        popup.style.top = "80px";
    }
    else if (random==2) {
        popup.style.left = "30px";
        popup.style.top = "90px";
    }
    else if (random==3) {
        popup.style.left = "60px";
        popup.style.top = "40px";
    }
    else if (random==4) {
        popup.style.left = "90px";
        popup.style.top = "50px";
    }
    else if (random==5) {
        popup.style.left = "80px";
        popup.style.top = "80px";
    }
    else if (random==6) {
        popup.style.left = "70px";
        popup.style.top = "30px";
    }
    else if (random==7) {
        popup.style.left = "60px";
        popup.style.top = "90px";
    }
    else if (random==8) {
        popup.style.left = "60px";
        popup.style.top = "60px";
    }
    else {
        popup.style.left = "80px";
        popup.style.top = "40px";
    }
}