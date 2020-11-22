const refs = {
  seconds: document.querySelector(`span[data-value="days"]`),
  minutes: document.querySelector(`span[data-value="minutes"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  days: document.querySelector(`span[data-value="days"]`),
  timer: document.querySelector('.timer'),
};

const timer = {
  start() {
    const targetDate = new Date('Dec 31, 2020');
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockFace(time) {
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  refs.timer.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
