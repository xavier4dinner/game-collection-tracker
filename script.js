console.log("Game collection tracker loaded!");


const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const genreInput = document.querySelector("#genre");
const platformInput = document.querySelector("#platform");
const statusInput = document.querySelector("#status");
const ratingInput = document.querySelector("#rating");

console.log(form);

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
console.log(game);
});

