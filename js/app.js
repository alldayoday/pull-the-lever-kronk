/**--------------CACHED ELEMENT REF----------------**/
const pull = document.querySelector('#lever')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const h1 = document.querySelector('#title')
const credit = document.querySelector('#credit')
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")
const cashOut = document.querySelector('#cashOut')
const arm = document.querySelector('#arm')

/**-------------AUDIO FILES-------------**/
const allComingTogether = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/all-coming-together.mp3')
const wrongLever = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/wrong-lever.mp3')
const whyThatLever = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/why-do-we.mp3')
const seenThatComin = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/seen-that-comin.mp3')

/**-------------VARIABLES-------------**/
let creditTotal

/**-------------EVENT LISTENERS-------------**/
pull.addEventListener('click', checkCredit)
lightDarkBtn.addEventListener("click", toggleLightDark)
cashOut.addEventListener('click', cashZero)

//set the initial screen
init()
function init() {
  disp1 = Math.floor(Math.random() * 10 + 1)
  disp2 = Math.floor(Math.random() * 10 + 1)
  disp3 = Math.floor(Math.random() * 10 + 1)
  creditTotal = 100
  arm.innerHTML = `<img src="./assets/arm.png">`
  num1.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp1}.png" />`
  num2.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp2}.png" />`
  num3.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp3}.png" />`
}

//check if the user has credits, hide lever button to avoid multiple clicks, spin the number on the board, eventually stop the spin. in the meantime, set h1 text
function checkCredit() {
  if (creditTotal >= 5) {
    creditTotal = creditTotal -= 5
    credit.textContent = `${creditTotal} Credits`
    pull.style.visibility = "hidden"
    startSpin()
    setTimeout(stopSpin, 1200)
    h1.textContent = `Pull the Lever, Kronk!`
  } else {
    h1.textContent = "Come back when you have money!"
  }
}

//generate 3 numbers between 1 and 10, show the image with that file name
function renderNum() {
  secretNum1 = Math.floor(Math.random() * 10 + 1)
  num1.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum1}.png" />`
  secretNum2 = Math.floor(Math.random() * 10 + 1)
  num2.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum2}.png" />`
  secretNum3 = Math.floor(Math.random() * 10 + 1)
  num3.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum3}.png" />`
  checkWin()
}

//if each number is the same we have a winner, otherwise wrong lever. if we run out of money, why have that lever? audio for each option
function checkWin() {
  if (secretNum1 === secretNum2 && secretNum1 === secretNum3) {
    h1.innerText = `Winner!`
    confetti.start(3000)
    creditTotal = creditTotal += 100
    credit.textContent = `${creditTotal} Credits`
    allComingTogether.volume = .15
    allComingTogether.play()
  } else if (creditTotal > 0) {
    h1.innerText = `WRONG LEVEEEEER!!`
    wrongLever.volume = .15
    wrongLever.play()
  } else {
    h1.innerText = `Why do we even have that lever?`
    whyThatLever.volume = .15
    whyThatLever.play()
  }
}

//set dark and bees mode
function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  h1.className = h1.className === "dark" ? "" : "dark"
  if (body.className === "dark") {
    lightDarkBtn.textContent = "KRONK"
  } else {
    lightDarkBtn.textContent = "BEES?"
  }
}

//cashout function to end game
function cashZero() {
  creditTotal = 0
  credit.innerHTML = "0 Credits"
  seenThatComin.volume = .10
  seenThatComin.play()
}

//flip the lever, start the spin
function startSpin(){
  spin = setInterval(roll, 50)
  setTimeout(stopAttempt, 3500)
  arm.setAttribute("class", "flip-horizontal-bottom")
}

//randomize images during spin
function roll() {
  disp1 = Math.floor(Math.random() * 10 +1)
  disp2 = Math.floor(Math.random() * 10 +1)
  disp3 = Math.floor(Math.random() * 10 +1)
  num1.innerHTML = `<img src="../assets/${disp1}.png" />`
  num2.innerHTML = `<img src="../assets/${disp2}.png" />`
  num3.innerHTML = `<img src="../assets/${disp3}.png" />`
}

//stop the numbers from spinning and show the real result
function stopSpin() {
  clearInterval(spin)
  renderNum()
}

//bring back the button and reset the lever flip
function stopAttempt() {
  arm.setAttribute("class", "no-flip")
  pull.style.visibility = 'visible'
}
