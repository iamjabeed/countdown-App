let intervelEl = setInterval(function () {
  let countEl = document.getElementById("counter-wrap");
  let targetDate = new Date("jan 4, 2023 10:00:00").getTime(); //DATE FOR WHICH COUNTDOWN
  let currentTime = new Date().getTime();
  let differnceEl = targetDate - currentTime;
  let days = Math.floor(differnceEl / (60 * 60 * 24 * 1000));
  let hours = Math.floor(
    (differnceEl % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((differnceEl % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((differnceEl % (60 * 1000)) / 1000);
  let dString = days;
  let hString = hours;
  let minString = minutes;
  let secString = seconds;
  if (dString < 10) {
    dString = "0" + dString;
  }
  if (hString < 10) {
    hString = "0" + hString;
  }
  if (minString < 10) {
    minString = "0" + minString;
  }
  if (secString < 10) {
    secString = "0" + secString;
  }
  //   hString < 10 ? (dString = "0" + dString) : dString;

  countEl.innerHTML = `${dString}D : ${hString}Hrs : ${minString}Mins : ${secString}Sec`;
}, 1000);
