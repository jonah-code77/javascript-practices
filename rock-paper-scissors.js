

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}
localScore()

//AUTOPLAY CODES
let isAutoPlay = false
let intervalId;

/*
function autoPlay(){
    if (!isAutoPlay) {
       intervalId = setInterval(() => {
        const playerMove = pickComputerMove()
        playGame(playerMove)
    }, 1000);
    isAutoPlay = true
    }else {
        clearInterval(intervalId)
        isAutoPlay = false 
    }
   
}
*/

document.querySelector('.auto-play-btn')
    .addEventListener('click', ()=>{
        if (!isAutoPlay) {
            intervalId = setInterval(() => {
             const playerMove = pickComputerMove()
             playGame(playerMove)
         }, 1000);
         isAutoPlay = true
         }else {
             clearInterval(intervalId)
             isAutoPlay = false 
         }
    })

//ROCK BTN 
document.querySelector('.rock-btn')
    .addEventListener('click',()=>{playGame('rock')
    })

// PAPER BTN
document.querySelector('.paper-btn')
    .addEventListener('click',()=>{playGame('paper')
    })

// SCISSORS BTN
document.querySelector('.scissors-btn')
    .addEventListener('click',()=>{playGame('scissors')
    })
    

//funtion to use keydown
document.addEventListener('keydown',(event)=>{
    if (event.key === 'r') {
        playGame('rock')
    } else if(event.key === 'p') {
        playGame('paper')
    } else if (event.key === 's'){
        playGame('scissors')
    }
})

//PLAYGAME FUNCTION
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = ''

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'YOU LOSE'
        }else if(computerMove === 'paper'){
            result = 'YOU WIN'
        }else if (computerMove === 'scissors') {
            result = 'YOU TIE'
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'YOU WIN'
        }else if(computerMove === 'paper'){
            result = 'YOU TIE'
        }else if (computerMove === 'scissors') {
            result = 'YOU LOSE'
        }
    }else if(playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'YOU TIE'
        }else if(computerMove === 'paper'){
            result = 'YOU LOSE'
        }else if (computerMove === 'scissors') {
            result = 'YOU WIN'
        }
    }

    if (result === 'YOU WIN') {
        score.wins+= 1
    } else if (result === 'YOU LOSE') {
        score.losses+= 1
    } else if (result === 'YOU TIE'){
        score.ties+= 1
    }
   //console.log(result)
   
   document.querySelector('.js-result').innerHTML = result
   document.querySelector('.js-moves').innerHTML = `YOU ${playerMove} - ${computerMove} COMPUTER `       
   localScore ()        
}


//LOCAL STORAGE FUNCTION
function localScore (){
    localStorage.setItem('score', JSON.stringify(score))
    document.querySelector('.js-score')
    .innerHTML = `wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
}

function pickComputerMove(){
    const randomNumber = Math.random()
    let computerMove = ''
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors'
    }
    //console.log(computerMove)
    return computerMove
}