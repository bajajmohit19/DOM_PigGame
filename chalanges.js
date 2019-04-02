/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// ---------------------FIRST LECTURE---------------------
var scores, roundScore, activePlayer, dice, gamePlaying, prevDice;

init();

var lastDice;
var x = document.querySelector("#score-0").textContent;
console.log(x);

document.querySelector(".dice").style.display = 'none';
document.querySelector(".dice2").style.display = 'none';
// ---------------------FIRST LECTURE---------------------

// ----------------------SECOND LECTURE--------------------
var limit;
document.querySelector(".btn-roll").addEventListener('click',function(){
    //  limit = document.querySelector("#limit").value;
    if(gamePlaying){


// 1.  Random number
 var dice = Math.floor(Math.random()*6)+1;
 var dice2 = Math.floor(Math.random()*6)+1;
 
//  2. Display the result
 var diceDom = document.querySelector(".dice");
 var diceDom2 = document.querySelector(".dice2");
 
 diceDom.style.display = 'block';
 diceDom2.style.display = 'block';

 diceDom.src = "dice-"+dice+".png";
 diceDom2.src = "dice-"+dice2+".png";
// 3. Update the round score if the rolled number was not equal to 1
if(dice == 6 && dice2 == 6 && lastDice == 6){
    console.log("6 repeated twice");
    scores[activePlayer] = 0;
    document.querySelector("#score-" +activePlayer).textContent = '0';
    nextPlayer();
}else 
if(dice!==1 && dice2!==1){
    roundScore +=dice+dice2;
    document.querySelector("#current-"+activePlayer).textContent = roundScore;
}
else{
    // Next player
    nextPlayer();
    }
    lastDice = dice;
}
})
//  Coding Challenge 1.
 

// ----------------------------SECOND LECTURE--------------------

// ----------------------------THIRD LECTURE--------------------
document.querySelector(".btn-hold").addEventListener('click', function(){

    if(gamePlaying){
    // 1. Add round scroe to the global score.
    scores[activePlayer]+=roundScore;

    // 2. Update the UI
    document.querySelector("#score-" +activePlayer).textContent = scores[activePlayer];

    limit = document.querySelector("#limit").value;
    var winningScore;

    if(limit){
        winningScore = limit;
    }
    else{
        winningScore = 100;
    }
    
    // Check if player won the game
    // if(scores[activePlayer] >= 10){
        if(scores[activePlayer] >= winningScore){
        document.querySelector("#name-" +activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = 'none';
        document.querySelector(".dice2").style.display = 'none';
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
        gamePlaying = false;
    }
    else{
        // Next player
        nextPlayer();
        }
    }
})
document.querySelector(".btn-new").addEventListener('click', init);
        

    function nextPlayer(){
        
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // if(activePlayer === 0){ 
    //     activePlayer = 1;

    // }else{
    //     activePlayer = 0;
    // }
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

    document.querySelector(".dice").style.display = 'none';
    document.querySelector(".dice2").style.display = 'none';

}

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
        
    document.querySelector("#limit").value = '';

    document.querySelector("#score-0").textContent = '0';
    document.querySelector("#score-1").textContent = '0';
    document.querySelector("#current-0").textContent = '0';
    document.querySelector("#current-0").textContent = '0';

    document.querySelector("#name-0").textContent = 'Player 1';
    document.querySelector("#name-1").textContent = 'Player 2';
    
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
}







