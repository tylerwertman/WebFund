function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + new Date().getMinutes() * 60 + new Date().getHours() * 3600;
}


console.log(`${new Date().getHours()} hours passed today`);
console.log(`${new Date().getMinutes()} minutes passed today`);
console.log(`${new Date().getSeconds()} seconds passed today`);

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    var hrsFloor = Math.floor(time/3600);
    var minsFloor = Math.floor(time/60)%60;
    var secFloor = Math.floor(time%60);
    
    var hrsFloor = Math.floor(time/3600);
    var minsFloor = Math.floor(time/60)%60;
    var secFloor = Math.floor(time%60);

    var hrs = hrsFloor*30+180+(minsFloor/2);
    var mins = minsFloor*6+180+(secFloor/10);
    var sec = secFloor*6+180;

    console.log(`${hrs-180}, ${mins-180}, ${sec-180}`);

    var hrsHand = document.querySelector("#hours");
    hrsHand.style.transform = `rotate(${(hrs)}deg)`;

    var minsHand = document.querySelector("#minutes");
    minsHand.style.transform = `rotate(${(mins)}deg)`;

    var secsHand = document.querySelector("#seconds");
    secsHand.style.transform = `rotate(${(sec)}deg)`;


}, 1000);
