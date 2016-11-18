// Your code here

// to format min and seconds to have two digits
var formatMinSec = function(minSec) {
  var myNumber = minSec;
  return ("0" + myNumber).slice(-2);
};

// this function asks for the date right now, prints the hours min seconds.
var getClock = function() {
  var myClock = new Date(Date.now());
  console.log(myClock);

  var clockTower = $('#clock');
  var hours = myClock.getHours();
  var min = formatMinSec(myClock.getMinutes());
  var seconds = formatMinSec(myClock.getSeconds());
  clockTower.replaceWith("<h1 id='clock'>" + hours + ':'+ min + ':' + seconds + '</h1>');
};

// this function calls the getClock function every second.
var updateClock = setInterval(function () {
    getClock();
  }, 1000);

$(document).ready(function(){
  updateClock();
});
