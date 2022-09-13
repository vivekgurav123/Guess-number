"use strict";
// document.querySelector('.message').textContent = "Correct Number!";
// document.querySelector('.number').textContent = "13";
// document.querySelector('.score').textContent = "10";

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value = 23);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    // console.log(guess, typeof(guess));

    // When there is no number
    if(!guess){
         document.querySelector('.message').textContent = "❌ No Number!";

    // When player wins
    }else if(guess === secretNumber){
         document.querySelector('.message').textContent = "🏆Correct Number!";
         score ++;
        document.querySelector('.score').textContent = score;
        // style DOM Manupulation
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '10%';
        document.querySelector('.number').textContent = secretNumber;

        //Set High score
        if(score>highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    // When guess is to High
    }else if(guess>secretNumber){
           if(score>1){
            document.querySelector('.message').textContent = "📈To High!";
            score--;
            document.querySelector('.score').textContent = score;
           }else{
            document.querySelector('.message').textContent = "😑You lost the game";
            document.querySelector('.score').textContent = 0;
           }

    // When guess is to low
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = "📈To Low!";
            score--;
            document.querySelector('.score').textContent = score;
           }else{
            document.querySelector('.message').textContent = "😑You lost the game";
            document.querySelector('.score').textContent = 0;
           }
        
    }
}); 



document.querySelector('.again').addEventListener('click', function(){
       score = 20;
       secretNumber = Math.trunc(Math.random()*20)+1;
       document.querySelector('.score').textContent = score;
       document.querySelector('.number').textContent = "?";
       document.querySelector('.message').textContent = "😵 Start Guessing ...";
       document.querySelector('.guess').value = ' ';
       document.querySelector('body').style.backgroundColor = '#000';
       document.querySelector('.number').style.width = '7%';

});


const vivek = () =>{

};

