window.onload = function() {
    let now = new Date().getTime();
    let millisecondsToWait = 5000; /* i.e. 1 second */
    while (new Date().getTime() < now + millisecondsToWait) {
    }
    location.reload();
};