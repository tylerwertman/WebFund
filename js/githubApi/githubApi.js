var currrentUsername = "";
var cardsDiv = document.querySelector(".cards");

function getUsername(element) {
    console.log(element.value);
    currrentUsername = element.value;
}

function makeCoderCard(data) {
    var res = ` <div class = "card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div>
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Public Repos: ${data.public_repos}</p>
                    </div>
                </div>`;
    return res;
}

async function searchGithub() {
    var response = await fetch("https://api.github.com/users/" + currrentUsername);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData)+cardsDiv.innerHTML;
    var delMe = document.querySelectorAll("h3");
    delMe[delMe.length-1].innerHTML = "";
}