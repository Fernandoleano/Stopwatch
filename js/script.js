/*
    This is a stop watch thats it!
*/
const timer = document.getElementById("stopwatch");

// dev button
function button() {
    document.getElementById("dev").innerHTML = "Sup qt my name is Fernando I made this 👁👄👁 like it?"
}

// the variavles for the watch
var hour = 0;
var minute = 0;
var second = 0;
var stoptime = true;

// function for the stop watch
function start(){
    // once you click stop it will stop the watch
  if(stoptime == true){
      stoptime = false;
      // This function will start the time cycle
      startTime();
  }  
}

// stops the time
function stop(){
    // once you click start it will start the timer
    if(stoptime == false){
        stoptime = true;
    }
}

// displays and starts the time
function startTime(){
    if(stoptime == false){
        hour = parseInt(hour);
        minute = parseInt(minute);
        second = parseInt(second);

        // seconds = 1+
        second = second + 1;

        // minutes = 60 seconds
        if(second == 60){
            minute = minute + 1;
            second = 0;
        }

        // hour = 60 minutes
        if(minute == 60){
            hour = hour + 1;
            minute = 0;
            second = 0;
        }

        if(second == 10 || second == 0){
            second = '0' + second;
        }
        else if(minute == 10 || minute == 0){
            minute = '0' + minute;
        }
        else if(hour == 10 || hour == 0){
            hour = '0' + hour;
        }

        // display the timer
        timer.innerHTML = hour + ':' + minute + ':' + second;

        
        setTimeout("startTime()", 1000);
    }
}

// reset the timer
function reset(){
    timer.innerHTML = "00:00:00";
    hour = 0;
    minute = 0;
    second = 0;
    stoptime = true;
}
