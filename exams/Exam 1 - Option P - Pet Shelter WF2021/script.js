// Remove Donate btn onclick
function removeDonate(element) {
    element.style.display = "none";
    // alert("Thank you for electing to donate! Your life savings has automagically been transferred from your bank account! Please note: We are not responsible for possible evictions or loss of services reliant on autopay.");
}

// Alert the selected pet type [BONUS: it actually sorts]
function selectPet(value) {
    if (value == "Cat") {
        alert("You are looking for a " +value+".");
        document.querySelectorAll('.dog').forEach((item) => {
            item.style.display = "none";
        })
        document.querySelectorAll('.cat').forEach((item) => {
            item.style.display = "flex";
        })
        
    }
    if (value == "Dog") {
        alert("You are looking for a " +value+".");
        document.querySelectorAll('.cat').forEach((item) => {
            item.style.display = "none";
        })
        document.querySelectorAll('.dog').forEach((item) => {
            item.style.display = "flex";
        })
    }
    if (value == "Any Pet") {
        alert("You are looking for " +value+".");
        document.querySelectorAll('.cat').forEach((item) => {
            item.style.display = "flex";
        })
        document.querySelectorAll('.dog').forEach((item) => {
            item.style.display = "flex";
        })
    }

}

// Display & increment "pettings"
function increment(element) {
    // var start = Number(element.parentNode.children[0].children[0].innerHTML);
    // var num = start+1;
    var num = Number(element.parentNode.children[0].children[0].innerHTML)+1;

    element.parentNode.children[0].children[0].innerHTML = num;
    // console.log(element.parentNode.children[0].children[0].innerHTML);
    if (element.parentNode.children[0].innerHTML == 0) {
        element.parentNode.children[0].children[1].innerHTML = "";
    }
    else if (element.parentNode.children[0].children[0].innerHTML == 1) {
        element.parentNode.children[0].children[1].innerHTML = "&nbsp;Petting";
    }
    else {
        element.parentNode.children[0].children[1].innerHTML = "&nbsp;Pettings";
    }
}

// BONUS: add a little more feel to the page
function hoverCard(element) {
    if (element.style.backgroundColor == "darkgrey") {
        element.style.backgroundColor = "lightgrey";
    }
    else {
        element.style.backgroundColor = "darkgrey";
    }
}