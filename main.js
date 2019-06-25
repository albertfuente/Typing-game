window.addEventListener("load",init);

//Available Levels
const levels={
  easy:5,
  medium:3,
  hard:2
}
//to change leverl
const currentLevel=levels.medium;

//Global variables
let time=currentLevel;
let score=0;
let isPlaying;

//Dom elements
const wordInput=document.querySelector("#word-input");
const currentWord=document.querySelector("#current-word");
const scoreDisplay=document.querySelector("#score");
const timeDisplay=document.querySelector("#time");
const message=document.querySelector("#message");
const seconds=document.querySelector("#seconds");

const words=[
  'hat',
  'river',
  'lucky',
  'generate',
  'joke'
];


//Initialize Game
function init(){
  //show number of seconds
  seconds.innerHTML=currentLevel;
  //load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener("input",startMatch);
  //call countdown every second
  setInterval(countdown,1000);
  //check game status
  setInterval(checkStatus,50);
}

//startMatch
function startMatch(){
  if(matchWords()){
    console.log("MATCH");
    isPlaying=true;
    time=currentLevel+1;
    showWord(words);
    wordInput.value="";
    score++;
  }
  // If score is -1, display 0
  if(score==-1){
    scoreDisplay.innerHTML=0;
  }else{
    scoreDisplay.innerHTML=score;
  }
}
//match currentWrod to wordInput
function matchWords(){
  if(wordInput.value==currentWord.innerHTML){
    message.innerHTML="Correct !";
    return true;
  }else{
    message.innerHTML="";
    return false;
  }
}
//Pick and show random word
function showWord(words){
  //generate random array index
  const randInex=Math.floor(Math.random()*words.length);
  //output current word
  currentWord.innerHTML=words[randInex];
}

//countdown timer
function countdown(){
  //check time is not run out
  if(time>0){
    //decrement
    time--;
  }else if(time==0){
    isPlaying=false;
  }
  timeDisplay.innerHTML=time;
}

//check game status
function checkStatus(){
  if(!isPlaying&&time===0){
    message.innerHTML="Game over !!!"
    score=-1;
  }
}
