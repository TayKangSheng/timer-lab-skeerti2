// your code here
window.addEventListener('DOMContentLoaded', function () {
var timer = {
 seconds : 0,
 timerId : 0,
 startButton : document.querySelector('#start'),
 resetButton : document.querySelector('#reset'),
 pauseButton : document.querySelector('#pause'),

updateTime : function() {
  this.seconds += 1
  console.log('this is indise updateTime')
  console.log(this)
  var h1Element =  document.getElementById('timer')
  h1Element.innerHTML = "Time elapsed: "+ this.seconds
},

startTimer : function(e) {
  //console.log('this is indise startTimer')
  //console.log(this)
  var h1Element =  document.getElementById('timer')
  h1Element.innerHTML = "Time elapsed: "+ this.seconds
  this.timerId = setInterval(this.updateTime.bind(this), 1000)
},

resetTimer : function(e) {
  //console.log('this is indise resetTimer' + this)
  clearInterval(this.timerId)
  this.seconds = 0
  var h1Element =  document.getElementById('timer')
  h1Element.innerHTML = "Stop Watch"
},

pauseTimer : function(e) {
  //console.log('this is indise pauseTimer'+ this)
  clearInterval(this.timerId)
}

} // closing bracket of timer obj

timer.startButton.addEventListener('click', timer.startTimer.bind(timer))
timer.resetButton.addEventListener('click', timer.resetTimer.bind(timer))
timer.pauseButton.addEventListener('click', timer.pauseTimer.bind(timer))
})
