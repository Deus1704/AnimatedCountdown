document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const finalAnimationsFolder = "./finalAnimations";
  let days = 5; //Change as required
  let countdown = days * 24 * 60 * 60;

  function updateCountdown() {
    const daysRemaining = Math.floor(countdown / (24 * 60 * 60));
    const hoursRemaining = Math.floor((countdown % (24 * 60 * 60)) / 3600);
    const minutesRemaining = Math.floor((countdown % 3600) / 60);
    const secondsRemaining = countdown % 60;

    const daysDigit2 = Math.floor((daysRemaining % 100) / 10);
    const daysDigit3 = daysRemaining % 10;

    countdownElement.innerHTML = `
      <div class="neon-number dd">${getNeonImage(daysDigit2)}</div>
      <div class="neon-number dd">${getNeonImage(daysDigit3)}</div>

      <div class="neon-number hr">${getNeonImage(Math.floor(hoursRemaining / 10))}</div>
      <div class="neon-number hr">${getNeonImage(hoursRemaining % 10)}</div>

      <div class="neon-number mm">${getNeonImage(Math.floor(minutesRemaining / 10))}</div>
      <div class="neon-number mm">${getNeonImage(minutesRemaining % 10)}</div>

      <div class="neon-number ss">${getNeonImage(Math.floor(secondsRemaining / 10))}</div>
      <div class="neon-number ss">${getNeonImage(secondsRemaining % 10)}</div>
    `;
  }

  function getNeonImage(number) {
    const gifFilename = `${number}.gif`;
    const gifPath = `${finalAnimationsFolder}/${gifFilename}`;
    return `<img src="${gifPath}" alt="${formatNumber(number)}">`;
  }

  function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
  }

  function startCountdown() {
    updateCountdown();
    setInterval(function () {
      countdown--;
      if (countdown >= 0) {
        updateCountdown();
      }
    }, 1000);
  }

  startCountdown();
});
