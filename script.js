var today = $("#currentDay");
var
// update clock in real time
function displayTime() {
    var rightNow = moment().format("MMM Do, YYYY h:mm:ss a");
    today.text(rightNow);
}

setInterval(displayTime, 1000);
// fillable text area


// save text to local storage

// change colors w/ time