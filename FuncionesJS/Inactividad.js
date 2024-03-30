class SessionTimeoutHandler {
    constructor(timeoutDuration) {
        this.timeoutDuration = timeoutDuration;
        this.timeoutID = null;
        this.setup();
    }

    setup() {
        window.addEventListener("mousemove", this.resetTimer.bind(this), false);
        window.addEventListener("mousedown", this.resetTimer.bind(this), false);
        window.addEventListener("keypress", this.resetTimer.bind(this), false);
        window.addEventListener("DOMMouseScroll", this.resetTimer.bind(this), false);
        window.addEventListener("mousewheel", this.resetTimer.bind(this), false);
        window.addEventListener("touchmove", this.resetTimer.bind(this), false);
        window.addEventListener("MSPointerMove", this.resetTimer.bind(this), false);
        
        this.startTimer();
    }

    startTimer() {
        this.timeoutID = window.setTimeout(this.goInactive.bind(this), this.timeoutDuration);
    }

    resetTimer() {
        window.clearTimeout(this.timeoutID);
        this.goActive();
    }

    goInactive() {
        window.location.href = "Logout.php";
    }

    goActive() {
        this.startTimer();
    }
}

const sessionTimeoutHandler = new SessionTimeoutHandler(10000);