//global var for common object
var POTD = document.querySelector(".pokeOfTheDay");

//add listener for double-toggle onclick POTD image
//(kinda not necessary, we are not generating the <img>
//so this can be placed in stock html) 
POTD.lastElementChild.addEventListener("click", directionToggle);
POTD.lastElementChild.addEventListener("click", shinyToggle);

//make list of top 10
async function getPokeData () {
    console.log("running getPokeData");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var pokeData = await response.json();
    var response2 = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeData.results[0].name);
    // var pokeData2 = await response.json();
    var pokeUList = document.querySelector(".pokeUList");
    console.log(pokeData);
    // console.log(Poke.sprites.front_shiny);
    // console.log(topPoke.results[0].name)
    for (var i = 0; i < pokeData.results.length; i++) {
        var lineItem = document.createElement("li");
        lineItem.innerText = pokeData.results[i].name;
        pokeUList.appendChild(lineItem);        
        // lineItem.children[0] = Poke.sprites.front_shiny;
        var pokeLine = document.querySelectorAll("li");
        // console.log(pokeLine);
        pokeLine[i].addEventListener("click", pullImg);
    }
}
getPokeData();
//
//
async function pullImg(element) {
    console.log("running pullImg");
    console.log(element.explicitOriginalTarget);
    var pullPoke = element.explicitOriginalTarget
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+pullPoke.innerText);
    var poke = await response.json();
    var lineItem = document.createElement("img");
    lineItem.src = poke.sprites.front_default;
    // console.log(lineItem.src);
    // var pulledImg = poke.sprites.front_default;
    pullPoke.appendChild(lineItem);  
    if(pullPoke.children.length == 2){
        pullPoke.innerHTML = pullPoke.innerText;
}
}
//
// generate POTD with rng
async function pokeOfTheDay() {
    rng = Math.floor(Math.random() * 152);
    console.log("running pokeOfTheDay");
    // console.log(POTD.children[0]);
    // console.log(POTD.children[1]);
    // console.log(POTD.children[2]);
    // console.log(POTD.children[3]);
    // console.log(POTD.children[4]);
    // console.log(POTD.children[5]);
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_default);
    POTD.lastElementChild.src = poke.sprites.back_default;
    // console.log(POTD.lastElementChild.src);
    // console.log(POTD.lastElementChild);
    // console.log(POTD.lastChild);
    var potdName = document.querySelector(".pokeOfTheDay h3");
    // console.log(potdName.innerText);
    console.log(poke.name);
    potdName.innerText= `Pokemon of the day is: #${poke.id} ${poke.name}`;
}
pokeOfTheDay();
//
// button to toggle direction of POTD
async function directionToggle() {
    console.log("running directionToggle");
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_shiny);
    // console.log(POTD.children[3].src);
    // document.querySelector(h3).innerText+=poke.name;
    // console.log(document.querySelector("h3").innerText);
    // document.querySelector("h3").innerText+=poke.name;
    if (POTD.lastElementChild.src == poke.sprites.front_shiny) {
        POTD.lastElementChild.src = poke.sprites.back_shiny;
    }
    else if (POTD.lastElementChild.src == poke.sprites.back_shiny) {
        POTD.lastElementChild.src = poke.sprites.front_shiny;
    }
    else if (POTD.lastElementChild.src == poke.sprites.back_default) {
        POTD.lastElementChild.src = poke.sprites.front_default;
    }
    else if (POTD.lastElementChild.src == poke.sprites.front_default) {
        POTD.lastElementChild.src = poke.sprites.back_default;
    }
}
//
// button to toggle shiny of POTD
async function shinyToggle() {
    console.log("running shinyToggle");
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_shiny);
    // console.log(POTD.children[3].src);
    // document.querySelector(h3).innerText+=poke.name;
    // console.log(document.querySelector("h3").innerText);
    // document.querySelector("h3").innerText+=poke.name;
    if (POTD.lastElementChild.src == poke.sprites.front_shiny) {
        POTD.lastElementChild.src = poke.sprites.front_default;
    }
    else if (POTD.lastElementChild.src == poke.sprites.front_default) {
        POTD.lastElementChild.src = poke.sprites.front_shiny;
    }
    else if (POTD.lastElementChild.src == poke.sprites.back_shiny) {
        POTD.lastElementChild.src = poke.sprites.back_default;
    }
    else if (POTD.lastElementChild.src == poke.sprites.back_default) {
        POTD.lastElementChild.src = poke.sprites.back_shiny;
    }
}
// ? add search function
// run when form submitted
// get the user input and save to var
// plug into api call
// repeat populating img src

// async function searchPoke() {

// }