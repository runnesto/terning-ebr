var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var randomNumber3 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber3);
var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
  document.querySelector("h1").innerHTML = "🚩 Eilov vann!"; //  '
} else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
  document.querySelector("h1").innerHTML = " 🚩Bård vann!";
} else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Rune vann!";
} else {
  document.querySelector("h1").innerHTML = "Uavgjort. Kast på nytt!";
}
