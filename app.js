
const pull = document.querySelector('#lever')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const h1 = document.querySelector('#title')
const credit = document.querySelector('#credit')
let creditTotal = 50
pull.addEventListener('click', checkCredit)


function checkCredit(){
  if (creditTotal >= 5) {
    creditTotal = creditTotal -= 5
    credit.textContent = `${creditTotal}`
    findNum()
  } else {
    h1.textContent = "Looks like you're broke, come back when you have money!"
  }
}


function findNum (){
  secretNum1 = Math.floor(Math.random() * 10 +1)
  num1.innerText = `${secretNum1}`
  secretNum2 = Math.floor(Math.random() * 10 +1)
  num2.innerText = `${secretNum2}`
  secretNum3 = Math.floor(Math.random() * 10 +1)
  num3.innerText = `${secretNum3}`
  checkWin()
}

function checkWin(){
  if (secretNum1 === secretNum2 && secretNum1 === secretNum3) {
    h1.innerText = `Winner!`
  } else {
    h1.innerText = "loser"
  }
}




//pull the lever, kronk !
//an emperors new groove themed slot machine? maybe!

//each time a user clicks to pull the lever, call credit function to check if credit total is above 5 credits, if not, set h1 to say user is broke and game end

//if credit total is above 5 credits, subtract 5 credits from credit total, update credit box, call generate function

//for generate function, generate 3 random numbers (lets shoot for 1-10)

//for window, tie each of the random numbers generated to an image (maybe emoji) and place one in each box then call win function

//for win function if num1 is the same as num2 and also the same as num3, win condition is met and credits are added to total.

//add animation to make it look like images/emojis are "rolling" within their boxes, if not possible try some sort of slow fade in with a timeout on win function

//add audio "cha-ching" when credit function runs and audio "crowd cheering" plus animation "confetti" on win

//if possible find an animation to make it look like the lever arm moves on button click

//stretch goal: if credits hit 0, instead of saying user is broke, remove hidden attribute from a form and list itemizing things the user can type in to sell for more credits. If they type in one of the options, add credits to credit total, hide form and list, and allow to keep playing. If they type in something not on the list h1 should say sorry, we dont accept those here but you can try the pawn shop down the road. This could also be done with multiple hidden buttons to avoid user typing incorrectly.

//how to add audio
//const foxSays = new Audio('../audio/fox.mp3')
// foxImg.addEventListener("click", (evt) => {
//   foxSays.volume = .10
//   foxSays.play()
// })
