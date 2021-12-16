// This will generate a random number between 1 to 6 and the math.floor will give you the whole number part , not the decimals
//In order to get random numbers from 0 - 6 , you need to add " + 1 " because it was only doing numbers from 0 - 5 without it.
var randomNumber1 = Math.floor(Math.random()* 6) + 1;


// This will produce a string that will be from dice1.png to dice6.png
// We can use the string to change the source "src= images/dice1.png" of the image in the HTML file, to a random one
var randomDiceImage = "images/dice" + randomNumber1 + ".png"




// Good to use querySelectorAll because that way it will select all the img
// This will select the first img source since you put [0] and store it in image1 variable
var image1 = document.querySelectorAll("img")[0];


// The first parathesis is what you wanna change , which is the source "src"
// The second part is what you want to change it to , ""
image1.setAttribute("src", randomDiceImage);




// The following is the same steps but for the second dice so that it changes randomly
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img") [1].setAttribute("src",randomDiceImage2);   //Same as above just cut into a shorter code , put together






// The fololowing code is to change the H1 based off who wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🏁 ";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏁 ";
}
else
document.querySelector("h1").innerHTML = "It's a Tie ❌";
