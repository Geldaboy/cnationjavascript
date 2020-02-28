let filmsIndex
let favFilms = [
    "Scream",
    "Star Wars",
    "Shaun of the dead"
];

    favFilms.push("Friday The 13th", "Batman The Dark Knight"); //this loop reads favourite films out one by one until it's all displayed rather than all in one go
// for (filmsIndex = 0; filmsIndex < favFilms.length;
//     filmsIndex++) {
//         console.log(favFilms[filmsIndex])
//     }
// while (filmsIndex != "Star Wars"){
//     console.log(filmsIndex);
//     filmsIndex = favFilms[Math.floor(Math.random()*4)];
  
// }
const filmCheck = () => { //this function checks if the film is star wars and displays a message depending on result
if (favFilms[1] != "Star Wars")
{
    console.log(`Booooo`)
}
else
{
    console.log("yayyy")
}
}
/*for (i = 0; i < 5; i++) //this loop counts from 0 to 11 one by one
{
    console.log(i);
}
for (i = 5; i > -1; i--)
{
    console.log(i);
}

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
/** */

let fiftyHunt = 50;
let currentNum = 0;

while(currentNum != fiftyHunt){
    currentNum = Math.floor(Math.random()*100);
    console.log(currentNum);
}

