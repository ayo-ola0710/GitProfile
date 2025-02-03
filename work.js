const updateTime  = document.getElementById("currentTimeUTC");

function updateCurrentTime() {
    const currentTime = new Date().toUTCString();
    updateTime.innerHTML = currentTime;
}

updateCurrentTime()

setInterval(updateCurrentTime, 1000);
