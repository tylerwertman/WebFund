console.log("Page loaded");

// Alert selected city (bonuses: swap the names and change the forecasts)

var weatherImg = document.querySelectorAll(".days img");
var weatherP = document.querySelectorAll(".days p");
var temp = document.querySelectorAll(".temps");
var red = document.querySelectorAll(".red");
var blue = document.querySelectorAll(".blue");
var sjImg = ["./assets/some_rain.png", "./assets/some_sun.png", "./assets/some_clouds.png", "./assets/some_sun.png"];
var sjAlt = ["some_rain img", "some_sun img", "some_clouds img", "some_sun img"];
var sjP =  ["some rain", "some sun", "some clouds", "some sun"];
var sjRed = ["24°", "27°", "21°", "26°"];
var sjBlue = ["18°", "19°", "16°", "21°"];
var bbkRed = [19,17,16,15];
var bbkBlue = [18,16,15,14];
var chiRed = [20,17,19,15];
var chiBlue = [19,16,18,14];
var dalRed = [31,33,35,37];
var dalBlue = [30,32,34,36];

function cityAlert(element) {
    var newCity = element.children[0].innerText;
    alert(`Loading weather report for ${newCity}...`);

    var activeCity = document.querySelectorAll("h2")[3].innerText;
    var temp = activeCity;

    // console.log(activeCity);
    // console.log(temp);
    // console.log(newCity);

    // This doesn't work? -> probably global vs local variable but I'm not gonna test that right now
    // activeCity = newCity;
    // newCity = temp;

    // This works..
    document.querySelectorAll("h2")[3].innerText = newCity;
    element.children[0].innerText = temp;


    // San Jose keeps its random weather...
    if (document.querySelectorAll("h2")[3].innerText == "San Jose") {
        for (var i = 0; i<weatherImg.length; i++) {
            weatherImg[i].src = sjImg[i];
            weatherImg[i].alt = sjAlt[i];
            weatherP[i].innerText = sjP[i];
            red[i].innerText = sjRed[i];
            blue[i].innerText = sjBlue[i];
        }
    } // end of San Jose

    // ...but Burbank has a reverse drought...
    else if (document.querySelectorAll("h2")[3].innerText == "Burbank") {
        for (var i = 0; i<weatherImg.length; i++) {
            weatherImg[i].src = "./assets/some_rain.png";
            weatherImg[i].alt = "some_rain img";
            weatherP[i].innerText = "some rain";
            red[i].innerText = bbkRed[i]+"°";
            blue[i].innerText = bbkBlue[i]+"°";
        }
    } // end of Burbank

    // ...and Chicago is now the Cloudy City (TM)...
    else if (document.querySelectorAll("h2")[3].innerText == "Chicago") {
        for (var i = 0; i<weatherImg.length; i++) {
            weatherImg[i].src = "./assets/some_clouds.png";
            weatherImg[i].alt = "some_clouds img";
            weatherP[i].innerText = "some clouds";
            red[i].innerText = chiRed[i]+"°";
            blue[i].innerText = chiBlue[i]+"°";
        }
    } // end of Chicago
    
    // ...and Dallas gets a heat wave...
    else {
        for (var i = 0; i<weatherImg.length; i++) {
            weatherImg[i].src = "./assets/some_sun.png";
            weatherImg[i].alt = "some_sun img";
            weatherP[i].innerText = "some sun";
            red[i].innerText = dalRed[i]+"°";
            blue[i].innerText = dalBlue[i]+"°";
        }
    } // end of Dallas
} // end of cityAlert

// City Reset (another bonus)
function resetCity(){
    document.querySelectorAll("h2")[0].innerText = "Burbank";
    document.querySelectorAll("h2")[1].innerText = "Chicago";
    document.querySelectorAll("h2")[2].innerText = "Dallas";
    document.querySelectorAll("h2")[3].innerText = "San Jose";
    for (var i = 0; i<weatherImg.length; i++) {
        weatherImg[i].src = sjImg[i];
        weatherImg[i].alt = sjAlt[i];
        weatherP[i].innerText = sjP[i];
        red[i].innerText = sjRed[i];
        blue[i].innerText = sjBlue[i];
    }
}
// Remove cookies div on click
function eatCookies(element) {
    // element.parentNode.style.display = "none";
    element.parentNode.remove();
}

// Convert F and C values
function farCel () {
    var temp = document.querySelectorAll(".temps");
    if (document.querySelector("select").value == "far") {
        for(var i=0; i<temp.length; i++) {
            newTemp = Math.round(parseInt(temp[i].innerText)*1.8+32);
            temp[i].innerText = newTemp + "°";
        }
    }
    else {
        for(var i=0; i<temp.length; i++) {
            newTemp = Math.round((parseInt(temp[i].innerText)-32)*.556);
            temp[i].innerText = newTemp + "°";
            // console.log(newTemp);
        }
    }
}