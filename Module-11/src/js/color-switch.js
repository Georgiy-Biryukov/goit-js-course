const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStartRef: document.querySelector('button[data-action="start"]'),
  btnStopRef: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = color;
};

let interval = null;

refs.btnStartRef.addEventListener('click', () => {
  interval = setInterval(() => setRandomColor(), 1000);
  refs.btnStartRef.disabled = true;
});

refs.btnStopRef.addEventListener('click', () => {
  clearInterval(interval);
  refs.btnStartRef.disabled = false;
});
