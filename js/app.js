/**---CACHED ELEMENT REF---**/
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

/**---AUDIO FILES---**/
const allComingTogether = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/all-coming-together.mp3')
const wrongLever = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/wrong-lever.mp3')
const whyThatLever = new Audio('https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/why-do-we.mp3')
const seenThatComin = new Audio('https:github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/seen-that-comin.mp3')

/**---VARIABLES---**/
let creditTotal

/**---EVENT LISTENERS---**/
pull.addEventListener('click', checkCredit)
lightDarkBtn.addEventListener("click", toggleLightDark)
cashOut.addEventListener('click', cashZero)



init()
function init() {
  disp1 = Math.floor(Math.random() * 10 + 1)
  disp2 = Math.floor(Math.random() * 10 + 1)
  disp3 = Math.floor(Math.random() * 10 + 1)
  creditTotal = 50
  arm.innerHTML = `<img src="./assets/arm.png">`
  num1.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp1}.png" />`
  num2.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp2}.png" />`
  num3.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${disp3}.png" />`
}


function checkCredit() {
  if (creditTotal >= 5) {
    creditTotal = creditTotal -= 5
    credit.textContent = `${creditTotal} Credits`
    renderNum()
  } else {
    h1.textContent = "Come back when you have money!"
  }
}


function renderNum() {
  secretNum1 = Math.floor(Math.random() * 10 + 1)
  num1.setAttribute("class", "roll-in-top")
  arm.setAttribute("class", "flip-horizontal-bottom")
  num1.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum1}.png" />`
  secretNum2 = Math.floor(Math.random() * 10 + 1)
  num2.setAttribute("class", "roll-in-top2")
  num2.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum2}.png" />`
  secretNum3 = Math.floor(Math.random() * 10 + 1)
  num3.setAttribute("class", "roll-in-top3")
  num3.innerHTML = `<img src="https://github.com/alldayoday/pull-the-lever-kronk/raw/main/assets/${secretNum3}.png" />`
  checkWin()
}


function checkWin() {
  if (secretNum1 === secretNum2 && secretNum1 === secretNum3) {
    h1.innerText = `Winner!`
    confetti.start(3000)
    creditTotal = creditTotal += 100
    credit.textContent = `${creditTotal} Credits`
    allComingTogether.volume = .15
    allComingTogether.play()
  } else if (creditTotal > 999) {
    h1.innerText = `You should honestly just cash out now`
  } else if (creditTotal > 0) {
    h1.innerText = `WRONG LEVEEEEER!!`
    wrongLever.volume = .15
    wrongLever.play()
  } else {
    h1.innerText = `Why do we even have that lever?`
    whyThatLever.volume = .15
    whyThatLever.play()
  }
  setTimeout(stopSpin, 1100)
}


function stopSpin() {
  num1.setAttribute("class", "no-spin")
  num2.setAttribute("class", "no-spin")
  num3.setAttribute("class", "no-spin")
  arm.setAttribute("class", "no-flip")
}


function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  h1.className = h1.className === "dark" ? "" : "dark"
  if (body.className === "dark") {
    lightDarkBtn.textContent = "KRONK"
  } else {
    lightDarkBtn.textContent = "BEES?"
  }
}

function cashZero() {
  creditTotal = 0
  credit.innerHTML = "0 Credits"
  seenThatComin.volume = .10
  seenThatComin.play()
}