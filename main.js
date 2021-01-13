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
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};


const background = {
    intervalId: null,
    isActive: false,
  
    start() {
        if (this.isActive) {
            return;
        }
      
        this.intervalId = setInterval(() => {
            refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
            console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
        }, 2000);
    },
  
    stop() {
        clearInterval(this.intervalId);
      
        this.intervalId = null;
        this.isActive = false;
    },
};

refs.startBtn.addEventListener("click", background.start.bind(background));
refs.stopBtn.addEventListener("click", background.stop.bind(background));
