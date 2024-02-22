const TimerLength = 600;// seconden



var alarmDiv = document.getElementById("alarm");
var geluid = document.getElementById("t")
var tijd = document.getElementById("timer");
var titel = document.getElementsByTagName("title")[0]

var gestart = false;

function alarm() {
    alarmDiv.innerHTML = `Wisselen!!!`;
    geluid.play();
    setTimeout(() => {
        alarmDiv.innerHTML = "";
    }, 5000);

};
var tijdstart;

function setup() {
    if (!(gestart)) {
        gestart = true;

        tijdstart = Date.now();
        interval = setInterval(() => {
            tijdVerschil = TimerLength - ((Date.now() - tijdstart) / 1000);
            if (tijdVerschil <= 0) {
                tijdstart = Date.now();
                tijdVerschil = TimerLength;
                alarm();
            }
            
            var minuten = Math.floor((tijdVerschil % (1000 * 60 * 60)) / (60));
            var seconden = Math.floor((tijdVerschil % (100 * 60)) - minuten * 60);
            if (seconden < 10) {
                seconden = `0${seconden}`;
            }
            tijd.innerHTML = `${minuten} : ${seconden}`;
            titel.innerHTML = `tijd: ${minuten} : ${seconden}`;
        }, 1000);
    } else {
        gestart = false;
        clearInterval(interval);
        alarmDiv.innerHTML = "GESTOPT";
        tijd.innerHTML = "Klik hier om te starten";
        geluid.stop();
    }
};
