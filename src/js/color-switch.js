const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  };
  
  let intervalId = null;
  
  refs.startBtn.addEventListener('click', startSwitch);
  refs.stopBtn.addEventListener('click', stopSwitch);
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  function startSwitch(e) {
    if (e.target.disabled) {
      return;
    }
    const max = colors.length - 1;
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, max)];
    }, 1000);
    e.target.disabled = true;
  }
  
  function stopSwitch() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
  }