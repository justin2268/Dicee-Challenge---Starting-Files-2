//Create Random numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Get replacement variables for the dice images and insert into the HTML
var randomDiceImg = "/images/dice" + randomNumber + ".png"; // /images/dice1-6.png"

//Change the img src to change the dice img to the correct one
document.querySelector(".img1").setAttribute("src", randomDiceImg);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Game logic writes result using inner.HTML
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}