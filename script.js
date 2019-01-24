const second = document.querySelector('.second');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const dateText = document.querySelector('.dateText');
const dayText = document.querySelector('.dayText');
const audio = new Audio('http://soundbible.com/grab.php?id=2044&type=mp3');

setInterval(setDate => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = mins * 6 + seconds * (360 / 3600);
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = hours * 30 + mins * (360 / 720);
    hour.style.transform = `rotate(${hoursDegrees}deg)`;

    const date = now.getDate();

    let day = now.getDay();

    if (day == 0) {
        day = 'SUN';
    } else if (day == 1) {
        day = 'MON';
    } else if (day == 2) {
        day = 'TUE';
    } else if (day == 3) {
        day = 'WED';
    } else if (day == 4) {
        day = 'THU';
    } else if (day == 5) {
        day = 'FRI';
    } else {
        day = 'SAT';
    }

    let month = now.getMonth();

    if (month == 0) {
        month = 'Jan';
    } else if (month == 1) {
        month = 'Feb';
    } else if (month == 2) {
        month = 'Mar';
    } else if (month == 3) {
        month = 'Apr';
    } else if (month == 4) {
        month = 'May';
    } else if (month == 5) {
        month = 'Jun';
    } else if (month == 6) {
        month = 'Jul';
    } else if (month == 7) {
        month = 'Agu';
    } else if (month == 8) {
        month = 'Sep';
    } else if (month == 9) {
        month = 'Oct';
    } else if (month == 10) {
        month = 'Nov';
    } else {
        month = 'Dec';
    }

    dateText.innerHTML = `${month} | ${date}`;
    dayText.innerHTML = `${day}`;
    audio.play();
}, 1000);