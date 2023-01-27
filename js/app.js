'use strict';

//console.log('HI');

let score = 0;

alert("Welcome to my page! Today we will be playing a game to see if you know anything about me. Good luck!");
let username = prompt("What is your name?");
alert("Welcome " + username + "!");

let doILikeSports = prompt("Do I Like Sports? Yes or No?").toLowerCase();

if (doILikeSports === 'yes'|| doILikeSports === 'y') {
  score++;
  //console.log ('You are correct! I do like sports');
} else if (doILikeSports === 'no'|| doILikeSports === 'n') {
  //console.log('You are wrong. I do like sports');
} else {
 // console.log('Please answer with yes or no');
}
alert("I do like sports!");

let doILiveInSeattle = prompt("Do I Live in Seattle? Yes or No?").toLowerCase();

if (doILiveInSeattle === 'yes' || doILiveInSeattle === 'y'){
  score++;
  //console.log ('You are correct! I do live in Seattle');
} else if (doILiveInSeattle === 'no'|| doILiveInSeattle === 'n') {
  //console.log('You are wrong. I do live in Seattle');
} else { 
  //console.log('Please answer with yes or no');
}
alert("I do live in Seattle!")

let doISpeakthreeLanguages = prompt("Do I Speak Three Languages? Yes or No?").toLowerCase();

if (doISpeakthreeLanguages === 'yes' || doISpeakthreeLanguages === 'y'){
  score++;
  //console.log ('You are correct! I do speak three languages');
} else if (doILiveInSeattle === 'no'|| doILiveInSeattle === 'n') {
  //console.log('You are wrong. I do speak three languages');
} else { 
  //console.log('Please answer with yes or no');
}
alert("I do speak three languages!")

let doIHaveanyPETS = prompt("Do I Have Any Pets? Yes or No?").toLowerCase();

if (doIHaveanyPETS === 'no' || doIHaveanyPETS === 'n') {
  score++;
  //console.log ('You are correct! I do not have any pets');
} else if (doIHaveanyPETS === 'yes'|| doIHaveanyPETS === 'y') {
  // console.log('You are wrong. I do not have any pets');
} else { 
  //console.log('Please answer with yes or no');
}
alert("No i do not have any pets");

let doIHaveAnyChildren = prompt("Do I Have Any Children? Yes or No?").toLowerCase();

if(doIHaveAnyChildren === 'no' || doIHaveAnyChildren === 'n') {
  score++;
 // console.log('You are corrects! I do not have any children')
} else if (doIHaveAnyChildren === 'yes'|| doIHaveAnyChildren === 'y') {
  //console.log('You are wrong. I do not have any children');
} else {
  //console.log('Please answer with yes or no');
}
alert("No i do not have any children");

let guessANumber = prompt ("How Many Siblings Do I Have?");

let attempts = 4;
for (let i = 0; i < attempts; i++){ 
  if (guessANumber < 5){ 
    alert("Too low");
    guessANumber = prompt ("Guess a number between 1-10");
  }
  if (guessANumber > 5){
    alert("Too high");
    guessANumber = prompt ("Guess a number between 1-10");
  }
  if (guessANumber === 5){
    score++;
    alert("Correct!");
    break;
  }
 
}


let whatCitiesHaveiVisited = prompt("Which Cities Have I Visited?");
let userOptions = ['dubai', 'paris', 'istanbul'];
let userChoice = false;
let attemptsRemaining = 6;
while (attemptsRemaining > 0) {
  for (let i = 0; i < userOptions.length; i++){
    if (whatCitiesHaveiVisited.toLowerCase() === userOptions[i]){
      score++;
      alert("Yes! You are correct.");
      alert(`That is correct! That cities i have visited are ${userOptions}`);
      userChoice = true;
      break;
    }
  }
  if (userChoice === false){
    attemptsRemaining--;
    alert("Incorrect, please try again");
    whatCitiesHaveiVisited = prompt("Which Cities Have I Visited?"); 
  }
  if (userChoice === true){
    break;
  }
}


alert("Thank you for playing " + username + "!" + "Your total score is " + score + "out of 7");


