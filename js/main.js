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
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
}

// Add zero
function addZero(n) {
  return (n < 10 ? "0" : "") + n;
  // return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set background and greeting
function setBgAndGreet() {
  const today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "black";
    greeting.textContent = "Good Afternoon";
    //afternoon
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    greeting.textContent = "Good Evening";
    //evening
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Your Name Here]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Run
showTime();
setBgAndGreet();
