/*jshint esversion: 6 */

window.addEventListener('load',init);


//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard:2
};

//use this to change levels
const currentLevel = levels.easy;


//game vars
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['estate',
'threshold',
'job',
'bark',
'housing',
'secure',
'conscience',
'summit',
'galaxy',
'city',
'straw',
'purpose',
'concern',
'injection',
'lock',
'rotate',
'functional',
'heart',
'debt',
'pavement'];

//Initialize game

function init(){
  //Show number of seconds
  seconds.innerHTML = currentLevel;
  // load a word from the array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener('input',startMatch);
  //we want to countdown every seconds
  setInterval(countdown,1000);
  //check game status
  setInterval(checkStatus,50);
}

//Start match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  //if score is -1 display 0

  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }
  else{
    scoreDisplay.innerHTML = score;
  }
}

//Match words
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!';
    return true;
  }
  else{
    message.innerHTML = '';
    return false;
  }
}

//Pick random words

function showWord(words){
  //generate a random index
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

//countdown timer

function countdown(){
  //make sure time hasnt finished

  if(time > 0){
    //we want to decrement
    time--;

  }
  else if(time === 0){
    //game over
    isPlaying = false;
  }

  //show timeout
  timeDisplay.innerHTML = time;
}

//check game status

function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'GAME OVER!';
    score = -1;

  }
}
