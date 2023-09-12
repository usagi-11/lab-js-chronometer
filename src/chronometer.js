class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (printTimeCallback) {
          printTimeCallback();
        };
      }, 1000);
      return printTimeCallback;
  }

  getMinutes() {
    // ... your code goes here

    const minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    // ... your code goes here

    const secondsPassed = this.currentTime % 60
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    
    let twoDigits = value.toString();
    if (twoDigits.length < 2) {
      twoDigits = "0" + twoDigits;
    }
    console.log(twoDigits, value);
    return twoDigits;
  }

  stop() {
    // ... your code goes here

    setTimeout(() => {
      clearInterval(this.intervalId)
    })
    clearInterval();
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}




const test = new Chronometer()
test.computeTwoDigitNumber(2);