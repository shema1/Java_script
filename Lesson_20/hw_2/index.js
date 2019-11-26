let timer = {
        secondsPassed: 0,
        minsPassed: 0,
        process: 0,
        startTimer() {
            this.process = setInterval(() => {
                this.secondsPassed += 5
                if (this.secondsPassed === 60) {
                    this.secondsPassed = 0;
                    this.minsPassed++
                }
            }, 5000);

        },
        stopTimer() {
            clearInterval(this.process)
        },
        getTime() {
            if (this.secondsPassed < 10) {
                return (`${this.minsPassed}:0${this.secondsPassed}`)
            }
            if (this.secondsPassed > 10) {
                return (`${this.minsPassed}:${this.secondsPassed}`)
            }
        },
        resetTimer() {
            this.secondsPassed = 0;
            this.minsPassed = 0;
        }
    }
    // timer.startTimer();
    // timer.getTime();
    // timer.stopTimer();
    // timer.startTimer();

export { timer }