
const pull = document.querySelector('#lever')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3'
)
const h1 = document.querySelector('#title')
const credit = document.querySelector('#credit')
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")


// let prettyNum
let creditTotal = 50
pull.addEventListener('click', checkCredit)
lightDarkBtn.addEventListener("click", toggleLightDark)

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  credit.className = credit.className === "dark" ? "" : "dark"
}

// init()
// function init (){
//   startSpin()
// }


function checkCredit(){
  if (creditTotal >= 5) {
    creditTotal = creditTotal -= 5
    credit.textContent = `${creditTotal} Credits`
    renderNum()
  } else {
    h1.textContent = "Looks like you're broke, come back when you have money!"
  }
}


function renderNum (){
  secretNum1 = Math.floor(Math.random() * 10 +1)
  num1.setAttribute("class", "roll-in-top")
  num1.innerHTML = `<img src="../assets/${secretNum1}.PNG" />`
  secretNum2 = Math.floor(Math.random() * 10 +1)
  num2.setAttribute("class", "roll-in-top")
  num2.innerHTML = `<img src="../assets/${secretNum2}.PNG" />`
  secretNum3 = Math.floor(Math.random() * 10 +1)
  num3.setAttribute("class", "roll-in-top")
  num3.innerHTML = `<img src="../assets/${secretNum3}.PNG" />`
  checkWin()
}

function checkWin(){
  if (secretNum1 === secretNum2 && secretNum1 === secretNum3) {
    h1.innerText = `Winner!`
    confetti.start(3000)
    creditTotal = creditTotal += 100
    credit.textContent = `${creditTotal} Credits`
  } else if (creditTotal > 999) {
    h1.innerText = `You should honestly just cash out now`
  } else if (creditTotal > 0){
    h1.innerText = `KRONK, that's the wrong lever!!`
  } else {
    h1.innerText = `Yzma is gonna be so mad`
  } 
  setTimeout(stopFlip, 800)
}


function stopFlip(){
  num1.setAttribute("class", "no-spin")
  num2.setAttribute("class", "no-spin")
  num3.setAttribute("class", "no-spin")
}

let timeLeft = 5

function startSpin(){
  spin = setInterval(roll, 200)
}
function seconds(){

}

init()
function init() {
  disp1 = Math.floor(Math.random() * 10 +1)
  disp2 = Math.floor(Math.random() * 10 +1)
  disp3 = Math.floor(Math.random() * 10 +1)
  num1.innerHTML = `<img src="../assets/${disp1}.png" />`
  num2.innerHTML = `<img src="../assets/${disp2}.png" />`
  num3.innerHTML = `<img src="../assets/${disp3}.png" />`
}




// function slotStyle(secretNum){
//   if (secretNum === 1) prettyNum = " 🍒 "
//   if (secretNum === 2) prettyNum = " 🍄 "
//   if (secretNum === 3) prettyNum = " 🍀 "
//   if (secretNum === 4) prettyNum = " 🦄 "
//   if (secretNum === 5) prettyNum = " 🌈 "
//   if (secretNum === 6) prettyNum = " ♥️ "
//   if (secretNum === 7) prettyNum = " 🍩 "
//   if (secretNum === 8) prettyNum = " 🌮 "
//   if (secretNum === 9) prettyNum = " 🧁️ "
//   if (secretNum === 10) prettyNum = " 🍌 "
// }


//pull the lever, kronk !
//an emperors new groove themed slot machine? maybe!

//each time a user clicks to pull the lever, call credit function to check if credit total is above 5 credits, if not, set h1 to say user is broke and game end✅

//if credit total is above 5 credits, subtract 5 credits from credit total, update credit box, call generate function✅

//for generate function, generate 3 random numbers (lets shoot for 1-10)✅

//for window, tie each of the random numbers generated to an image (maybe emoji) and place one in each box then call win function✅

//for win function if num1 is the same as num2 and also the same as num3, win condition is met and credits are added to total.✅

//add a favicon ✅

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
