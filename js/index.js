const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;
let isOn = false;

refs.startButton.addEventListener("click", onStartClick);
refs.stopButton.addEventListener("click", onStopButton);

function onStartClick() {
  if (isOn) {
    refs.body.insertAdjacentHTML(
      "beforeend",
      `<p class="text">Start уже нажат вообще-то, нажимать больше не буду.</p>`
    );
    return;
  }

  isOn = true;
  timerId = setInterval(findColor, 1000);

  refs.body.insertAdjacentHTML(
    "beforeend",
    `<p class="text">Стартуем! Надоест - нажми Stop.</p>`
  );
}

function onStopButton() {
  if (isOn) {
    clearInterval(timerId);
    isOn = false;

    refs.body.insertAdjacentHTML(
      "beforeend",
      `<p class="text">Отличный выбор!</p>`
    );
    return;
  }

  refs.body.insertAdjacentHTML(
    "beforeend",
    `<p class="text">Нет смысла останавливать то, что еще не стартовало.</p>`
  );
}

function findColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

//генерация индекса элемента массива
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
