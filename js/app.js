'use strict';

//console.log('HI');

alert("Welcome to my page! Today we will be playing a game to see if you know anything about me. Good luck!");
let username = prompt("What is your name?");
alert("Welcome " + username + "!");

let doILikeSports = prompt("Do I Like Sports? Yes or No?").toLowerCase();

if (doILikeSports === 'yes'|| doILikeSports === 'y') {
  //console.log ('You are correct! I do like sports');
} else if (doILikeSports === 'no'|| doILikeSports === 'n') {
  //console.log('You are wrong. I do like sports');
} else {
 // console.log('Please answer with yes or no');
}
alert("I do like sports!");

let doILiveInSeattle = prompt("Do I Live in Seattle? Yes or No?").toLowerCase();

if (doILiveInSeattle === 'yes' || doILiveInSeattle === 'y'){
  //console.log ('You are correct! I do live in Seattle');
} else if (doILiveInSeattle === 'no'|| doILiveInSeattle === 'n') {
  //console.log('You are wrong. I do live in Seattle');
} else { 
  //console.log('Please answer with yes or no');
}
alert("I do live in Seattle!")

let doISpeakthreeLanguages = prompt("Do I Speak Three Languages? Yes or No?").toLowerCase();

if (doISpeakthreeLanguages === 'yes' || doISpeakthreeLanguages === 'y'){
  //console.log ('You are correct! I do speak three languages');
} else if (doILiveInSeattle === 'no'|| doILiveInSeattle === 'n') {
  //console.log('You are wrong. I do speak three languages');
} else { 
  //console.log('Please answer with yes or no');
}
alert("I do speak three languages!")

let doIHaveanyPETS = prompt("Do I Have Any Pets? Yes or No?").toLowerCase();

if (doIHaveanyPETS === 'no' || doIHaveanyPETS === 'n') {
  //console.log ('You are correct! I do not have any pets');
} else if (doIHaveanyPETS === 'yes'|| doIHaveanyPETS === 'y') {
  // console.log('You are wrong. I do not have any pets');
} else { 
  //console.log('Please answer with yes or no');
}
alert("No i do not have any pets")

let doIHaveAnyChildren = prompt("Do I Have Any Children? Yes or No?").toLowerCase();

if(doIHaveAnyChildren === 'no' || doIHaveAnyChildren === 'n') {
 // console.log('You are corrects! I do not have any children')
} else if (doIHaveAnyChildren === 'yes'|| doIHaveAnyChildren === 'y') {
  //console.log('You are wrong. I do not have any children');
} else {
  //console.log('Please answer with yes or no');
}
alert("No i do not have any children");

let guessANumber = prompt ("Guess a number between 1-10");

let attempts = 4;
for (let i = 0; i < attempts; i++){ 
  if (guessANumber < 5){ 
    alert("Too low");
    guessANumber = prompt ("Guess a number between 1-10");
  }
  if (guessANumber > 5){
    alert("Too high")
    guessANumber = prompt ("Guess a number between 1-10");
  }
  if (guessANumber == 5){
    alert("Correct!") 
    break;
  }
 
}


let whatCountriesHaveiVisited = prompt("Which Countries Have I Visited?");

let listOfCountries =

alert("Thank you for playing " + username + "!");

