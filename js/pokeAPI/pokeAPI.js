var rng = Math.floor(Math.random() * 152);
var pokeUList = document.querySelector(".pokeUList");
var POTD = document.querySelector(".pokeOfTheDay");
POTD.children[3].addEventListener("click", directionToggle);
POTD.children[3].addEventListener("click", shinyToggle);


async function getPokeData () {
    console.log("running getPokeData");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var pokeData = await response.json();
    // console.log(Poke.sprites.front_shiny);
    // console.log(topPoke.results[0].name)
    for (var i = 0; i < pokeData.results.length; i++) {
        // console.log(pokeData.results[i].name);
        var lineItem = document.createElement("li");
        lineItem.innerText = pokeData.results[i].name;
        // lineItem.children[0] = Poke.sprites.front_shiny;
        pokeUList.appendChild(lineItem);        
        var pokeLine = document.querySelectorAll("li");
        // console.log(pokeLine);
        pokeLine[i].addEventListener("click", pullImg);
        // pokeLine.addEventListener("click",);
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
    console.log(lineItem.src);
    // var pulledImg = poke.sprites.front_default;
    pullPoke.appendChild(lineItem);  
}
//
//
async function pokeOfTheDay() {
    console.log("running pokeOfTheDay");
    console.log(POTD.children[0]);
    console.log(POTD.children[1]);
    console.log(POTD.children[2]);
    console.log(POTD.children[3]);
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_default);
    POTD.children[3].src = poke.sprites.back_default;
    var potdName = document.querySelector(".pokeOfTheDay h3");
    console.log(potdName.innerText);
    console.log(poke.name);
    potdName.innerText= `${potdName.innerText} #${poke.id} ${poke.name}`;
}
pokeOfTheDay();
//
//
async function directionToggle() {
    console.log("running directionToggle");
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_shiny);
    // console.log(POTD.children[3].src);
    // document.querySelector(h3).innerText+=poke.name;
    // console.log(document.querySelector("h3").innerText);
    // document.querySelector("h3").innerText+=poke.name;
    if (POTD.children[3].src == poke.sprites.front_shiny) {
        POTD.children[3].src = poke.sprites.back_shiny;
    }
    else if (POTD.children[3].src == poke.sprites.back_shiny) {
        POTD.children[3].src = poke.sprites.front_shiny;
    }
    else if (POTD.children[3].src == poke.sprites.back_default) {
        POTD.children[3].src = poke.sprites.front_default;
    }
    else if (POTD.children[3].src == poke.sprites.front_default) {
        POTD.children[3].src = poke.sprites.back_default;
    }
}

async function shinyToggle() {
    console.log("running shinyFlipFlop");
    var response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+rng);
    var poke = await response.json();
    // console.log(poke.sprites.front_shiny);
    // console.log(POTD.children[3].src);
    // document.querySelector(h3).innerText+=poke.name;
    // console.log(document.querySelector("h3").innerText);
    // document.querySelector("h3").innerText+=poke.name;
    if (POTD.children[3].src == poke.sprites.front_shiny) {
        POTD.children[3].src = poke.sprites.front_default;
    }
    else if (POTD.children[3].src == poke.sprites.front_default) {
        POTD.children[3].src = poke.sprites.front_shiny;
    }
    else if (POTD.children[3].src == poke.sprites.back_shiny) {
        POTD.children[3].src = poke.sprites.back_default;
    }
    else if (POTD.children[3].src == poke.sprites.back_default) {
        POTD.children[3].src = poke.sprites.back_shiny;
    }
}
// ? add search function
// run when form submitted
// get the user input and save to var
// plug into api call
// repeat populating img src

async function searchPoke() {

}