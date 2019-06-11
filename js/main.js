//DOM Elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12 hr format
  hour = hour % 12 || 12; //if hour === 12 then hour % 12 = 0, in that case print 12

  //Output time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

  setTimeout(showTime, 1000);
}

//Run
