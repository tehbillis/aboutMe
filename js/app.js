'use strict';

let userName = prompt ("Before we get started please tell me your name?");
//console.log (userName);
alert("Hello " + userName + ", let's get started.");
//console.log ("Before we get started please tell me your name? Hello " + userName + ", let's get started.")

let correctAnswerTally = 0;

let questionOne = prompt('Is my name Trevor Ingram?').toLowerCase();

if (questionOne ==='yes' || questionOne === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctAnswerTally++;
} else if (questionOne === 'no' || questionOne === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionTwo = prompt('Did I grow up in Oregon?').toLowerCase();

if (questionTwo ==='yes' || questionTwo === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctAnswerTally++;
} else if (questionTwo === 'no' || questionTwo === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionThree = prompt('Did I ever live in Florida?').toLowerCase();

if (questionThree ==='yes' || questionThree === 'y'){
  //console.log('Wrong answer, try again.');
  alert('Wrong answer, try again.');
} else if (questionThree === 'no' || questionThree === 'n'){
    //console.log('You are correct!');
    alert('You are correct!');
    correctAnswerTally++;
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionFour = prompt('Did I attend college?').toLowerCase();

if (questionFour ==='yes' || questionFour === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctAnswerTally++;
} else if (questionFour === 'no' || questionFour === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionFive = prompt('Do I still work at Cascades East Transit?').toLowerCase();

if (questionFive ==='yes' || questionFive === 'y'){
  //console.log('Wrong answer, try again' + userName);
  alert('Wrong answer, try again ' + userName);
} else if (questionFive === 'no' || questionFive === 'n'){
    //console.log('You are correct!' + userName + ', great job!');
    alert('You are correct! ' + userName + ', great job!');
    correctAnswerTally++;
} else {
    //console.log('userName' + ', please answer with yes/no or y/n.');
    alert(userName + ', please answer with yes/no or y/n.');
}

var correctAnswer = 3; 
var attempts = 4;

for (var i = 1; i <= attempts; i++) {
  var guess = parseInt(prompt("How many states have I lived in? (Attempt " + i + "/" + attempts + ")"));

  if (guess === correctAnswer) {
    alert("Congratulations! That's correct.");
    correctAnswerTally++;
    break; 
  } else if (guess < correctAnswer) {
    alert("Too low. Try again.");
  } else {
    alert("Too high. Try again.");
  }

  if (i === attempts) {
    alert("Sorry, you've used all your attempts. The correct answer is " + correctAnswer + " states.");
  }
}

var correctStates = ["Oregon", "Kansas", "Texas"];
var attempts = 6;

var correctGuess = false;

while (attempts > 0 && !correctGuess) {
  var userGuess = prompt("Name one of the three states I've lived in (" + attempts + " attempts remaining):").toLowerCase();

  for (var i = 0; i < correctStates.length; i++) {
    if (userGuess === correctStates[i].toLowerCase()) {
      alert("Correct! I've lived in " + correctStates[0] + ", " + correctStates[1] + ", and " + correctStates[2] + ".");
      correctAnswerTally++;
      correctGuess = true;
      break;
    }
  }

  if (!correctGuess) {
    attempts--;
    if (attempts > 0) {
      alert("Incorrect. Try again.");
    } else {
      alert("Sorry, you've run out of attempts. The correct states are: " + correctStates[0] + ", " + correctStates[1] + ", and " + correctStates[2] + ".");
    }
  }
}

alert(userName + ", you got " + correctAnswerTally + " out of 7 questions correct!")


