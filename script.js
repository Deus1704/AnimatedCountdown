document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const finalAnimationsFolder = "./finalAnimations";
  let countdown = 9;

  function updateCountdown() {
    const seconds = countdown;

    countdownElement.innerHTML = `
      <div class="neon-number">${getNeonImage(seconds)}</div>
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
