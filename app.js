const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeBtn = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 20
let score =0
console.log (startBtn,screens)
startBtn.addEventListener('click',(event)=>{
  event.preventDefault()
  screens[0].classList.add('up')
})
timeBtn.addEventListener('click',(event)=>{
  event.target.classList.contains('time-btn')
  time = parseInt(event.target.getAttribute('data-time'))
  gameStart()
})
board.addEventListener('click',(event)=>{
  if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createRandomCircle()
  }
})
function finishGame(){
  board.innerHTML = `<h1>Ваш счет:
  <span class='primary'> ${score}</span>
  </h1>`
  timeEl.parentNode.classList.add('hide')
}
function gameStart(){
  screens[1].classList.add('up')
  setTime(time)
  createRandomCircle()
  setInterval(decreaseTime,1000)
}
function decreaseTime (){
  if (time === 0){
    finishGame()   
  }else if (time >0){
  let current = --time
  if (current<10){
    current = `0${current}`
  }
  setTime(current)
  
}
}
function setTime (value){
  timeEl.innerHTML = `00:${value}`
}

function createRandomCircle(){
  const circle = document.createElement('div')
  const size = getRandomNumber (10,60)
  const {width,height} = board.getBoundingClientRect()
  
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const font = randomColor()
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = font
  circle.style.boxShadow = `0 0 2px ${font}, 0 0 10px ${font}`
  board.append(circle)
}
function getRandomNumber(min,max){
  return Math.round(Math.random()*(max - min) + min)
}
function randomColor(){

  const indexs = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

  let color = '#'
  for (let i=0; i<6; i++){
    const index = Math.floor(Math.random()*indexs.length)
    
    color += indexs[index]
  }
  
  return color
}