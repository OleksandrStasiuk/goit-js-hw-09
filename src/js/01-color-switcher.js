const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', changeColorTheme);
stopBtn.addEventListener('click', stopColorTheme);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorTheme() {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'disabled');
}

function stopColorTheme() {
  clearInterval(timerId);

  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled');
}
