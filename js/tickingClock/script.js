function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}


//seconds
setInterval( function() {
    var secondsPassedInDay = getSecondsSinceStartOfDay();
    
    var hrsfloor = Math.floor(secondsPassedInDay/3600);
    var minfloor = Math.floor(secondsPassedInDay/60)%60;
    var secfloor = Math.floor(secondsPassedInDay%60);
    
    var hrs = (hrsfloor*30)+180+(minfloor/2);
    var min = minfloor*6+180+(secfloor/10);
    var sec = secfloor*6+180;
    console.log(minfloor);
    
    // num+=6;
    console.log("hours passed " +(Math.floor(secondsPassedInDay/3600)));
    console.log("minutes passed in the hr "+(Math.floor(secondsPassedInDay/60)%60));
    console.log("secs passed "+(Math.floor(secondsPassedInDay%60)));
    
    var hrsHand = document.querySelector("#hour");
    var secondsHand = document.querySelector("#seconds");
    var minuteHand = document.querySelector("#minutes");
    // console.log(secondsHand.style);
    
    hrsHand.style.transform = "rotate("+hrs+"deg)";
    minuteHand.style.transform = "rotate("+min+"deg)";
    secondsHand.style.transform = "rotate("+sec+"deg)";
    
}, 1000);

//starting deg
// num=0;
// num2=255;
// num3=125;
//minutes
// setInterval( function(element) {
//     var time = getSecondsSinceStartOfDay();
//     num2+=6;
//     console.log(minuteHand.style.transform);
//     console.log(minuteHand.style);

// }, 60000);

//hours lol
// setInterval( function(element) {
//     var time = getSecondsSinceStartOfDay();
//     var hourHand = document.querySelector("#hour");
//     num2+=6;
//     console.log(hourHand.style.transform);
//     console.log(hourHand.style);
//     hourHand.style.transform = "rotate("+num3+"deg)";

// }, 3600000);