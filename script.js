console.log("Game collection tracker loaded!");

const gameList = document.querySelector("#game-list");
const form = document.querySelector("form");

const titleInput = document.querySelector("#title");
const genreInput = document.querySelector("#genre");
const platformInput = document.querySelector("#platform");
const statusInput = document.querySelector("#status");
const ratingInput = document.querySelector("#rating");
const card = document.createElement("div");

/*console.log(form); Show that forms is working in console*/

const games = [];

form.addEventListener("submit", function(event){
event.preventDefault();

    console.log(titleInput.value);
    console.log(genreInput.value);
    console.log(platformInput.value);
    console.log(statusInput.value);
    console.log(ratingInput.value); /*Needs to be converted to numbers if you want*/

    const game = {
    title: titleInput.value,
    genre: genreInput.value,
    platform: platformInput.value,
    status: statusInput.value,
    rating: ratingInput.value
};
    games.push(game);
    const card = document.createElement("div");
    card.textContent = game.title;
     gameList.appendChild(card);
    console.log(game);
    console.log(games);
});

