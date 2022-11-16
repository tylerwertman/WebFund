console.log("page loaded...");


var a = document.getElementById("vid1");
var b = document.getElementById("vid2");
var c = document.getElementById("vid3");
var d = document.getElementById("vid4");
var e = document.getElementById("vid5");

function playOnHoverA(element) {
    a.play();
    document.getElementById("vid1").muted = true
    console.log("Playing primary video with volume muted")
}
function pauseOnHoverA(element) {
    a.pause();
    console.log("Paused primary video")

}

function playOnHoverB(element) {
    b.play();
    document.getElementById("vid2").muted = true
    console.log("Playing 1st up-next video with volume muted")

}
function pauseOnHoverB(element) {
    b.pause();
    console.log("Paused 1st up-next video")

}

function playOnHoverC(element) {
    c.play();
    document.getElementById("vid3").muted = true
    console.log("Playing 2nd up-next video with volume muted")

}
function pauseOnHoverC(element) {
    c.pause();
    console.log("Paused 2nd up-next video")

}

function playOnHoverD(element) {
    d.play();
    document.getElementById("vid4").muted = true
    console.log("Playing 3rd up-next video with volume muted")

}
function pauseOnHoverD(element) {
    d.pause();
    console.log("Paused 3rd up-next video")

}

function playOnHoverE(element) {
    e.play();
    document.getElementById("vid5").muted = true
    console.log("Playing 4th up-next video with volume muted")

}
function pauseOnHoverE(element) {
    e.pause();
    console.log("Paused 4th up-next video")

}
