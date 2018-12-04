window.onload = function () {
  // Instantiate variables 
  let msTens = 0;
  let msHundreds = 0;
  let secondOnes = 0;
  let secondTens = 0;

  // Instantiate the name of the function created later
  let Interval;

  // Instantiate ms and second elements
  let addMsHundreds = document.getElementById("msHundreds");
  let addMsTens = document.getElementById("msTens");
  let addSecondOnes = document.getElementById("secondOnes");
  let addSecondTens = document.getElementById("secondTens");

  // Instantiate buttons
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");

  // When the Start button is clicked, clear the timer using clearInterval,
  // and start a new timer using setInterval
  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(digitalTimer, 10);
  }

  // When the Stop button is clicked, clear the timer using clearInterval
  stop.onclick = function () {
    clearInterval(Interval);
  }

  // When the Reset button is clicked, clear the timer and set all the digits
  // to 0
  reset.onclick = function () {
    // Remove the redDigit class so that numbers go back to original colors
    addMsHundreds.classList.remove("red");
    addMsTens.classList.remove("red");
    addSecondOnes.classList.remove("red");
    addSecondTens.classList.remove("red");

    clearInterval(Interval);
    msTens = "0"; msHundreds = "0"; secondOnes = "0"; secondTens = "0";
    addMsHundreds.textContent = `${msHundreds}`;
    addMsTens.textContent = `${msTens}`;
    addSecondOnes.textContent = `${secondOnes}`;
    addSecondTens.textContent = `${secondTens}`;
    msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 0;
  }

  function digitalTimer() {
    msHundreds += 1;

    if (msHundreds < 9) {
      addMsHundreds.textContent = `${msHundreds}`;
    }

    if (msHundreds > 9) {
      console.log("tenths");
      msTens += 1;
      addMsTens.textContent = `${msTens}`;
      msHundreds = 0;
      addMsHundreds.textContent = `${msHundreds}`;
    }

    if (msTens < 9) {
      addMsTens.textContent = `${msTens}`;
    }

    if (msTens > 9) {
      console.log("seconds");
      secondOnes += 1;
      addSecondOnes.textContent = `${secondOnes}`;
      msTens = 0;
      addMsTens.textContent = `${msTens}`;
    }

    if (secondOnes < 9) {
      addSecondOnes.textContent = `${secondOnes}`;
    }

    if (secondOnes > 9) {
      secondTens += 1;
      addSecondTens.textContent = `${secondTens}`;
      secondOnes = 0;
      addSecondOnes.textContent = `${secondOnes}`;
    }

    if (secondTens === 1) {
      clearInterval(Interval);
      msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 1;
      addMsHundreds.textContent = `${msHundreds}`;
      addMsTens.textContent = `${msTens}`;
      addSecondOnes.textContent = `${secondOnes}`;
      addSecondTens.textContent = `${secondTens}`;
      addMsHundreds.className += " red";
      addMsTens.className += " red";
      addSecondOnes.className += " red";
      addSecondTens.className += " red";
      return console.log("done.")
    }
  }
}