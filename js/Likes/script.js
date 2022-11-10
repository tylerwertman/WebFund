// var count = 0;
// function addLike(element) {
//     count++;
//     console.log(count);
//     if (count == 1) {
//         document.getElementById("likeCounter1").innerHTML = `${count} Like`;
//     }
//     else {
//         document.getElementById("likeCounter1").innerHTML = `${count} Likes`;
//     }
// }

function addLike(element) {
    if (document.querySelector("nav button").innerHTML == "Sign Out") {
        var a = Number(element.parentNode.children[0].innerHTML); // starts at zero
        var b = a + 1; // adds one
        element.parentNode.children[0].innerHTML = b;
        if (b == 0) {
            element.parentNode.children[1].innerHTML = "";
        }
        else if (b == 1) {
            element.parentNode.children[1].innerHTML = "Like";
        }
        else {
            element.parentNode.children[1].innerHTML = "Likes";
        }
    }
    else {
        alert("You need to be logged in to do that!!");
    }
}
    // element.parentNode.children[0].innerHTML = `${b} Likes`;
    // console.log(a);
    // console.log(b);

// var loggedIn = false;
function logIn(element) {
    if (element.innerHTML == "Log In") {
    element.innerHTML = "Sign Out";
    document.querySelector("h4").innerHTML = "Tyler";
    document.querySelector("a").innerHTML = "Add an avatar";
}
else if (element.innerHTML == "Sign Out") {
    element.innerHTML = "Log In";
    document.querySelector("h4").innerHTML = "James Doe";
    document.querySelector("a").innerHTML = "";
    document.getElementById("profilePic").src = "user-circle.png";
    }
    // var loggedIn = true;
    // console.log(loggedIn);
    // return loggedIn;
}
console.log();
function addImage() {
    if (document.querySelector("h4").innerHTML == "Tyler") {
        document.getElementById("profilePic").src = "me.jpg";
    }
}
