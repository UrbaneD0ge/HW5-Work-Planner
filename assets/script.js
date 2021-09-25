//declare variables
var today = $("#currentDay");
var textArea = $('textarea');
var crntHr = moment().format('H');
var saveBtn = $('saveBtn');

// update clock in real time
function displayTime() {
    var rightNow = moment().format("MMM Do, YYYY h:mm:ss a");
    today.text(rightNow);
}

setInterval(displayTime, 1000);

// Moment.js colorChanging - tried with moment.diff to no avail
textArea.each(function(i) {
    if (crntHr > i+9) {$(this).addClass('past')}
    if (crntHr == i+9) {$(this).addClass('present')}
    if (crntHr < i+9) {$(this).addClass('future')}
});


// save text to local storage 
$('.saveBtn').on('click', saveLocal);

function saveLocal () {
    var input = $(this).siblings('textArea').val().trim();
    var valueId = $(this).siblings('textArea').attr('id');
    console.log(this);
    localStorage.setItem(valueId, input);
}

function start() {
    load();
    function load() {
        var sVal = [];
        var sKey = Object.keys(localStorage);
        i = sKey.length;

        while (i--) {
            var getItems = localStorage.getItem(sKey[i]);
            sVal.unshift(getItems);
        }
    dsplay(sVal, sKey);
    return sVal;
    }
};

function dsplay (sVal, sKey) {
    for (var i = 0; i < sKey.length; i++) {
        $('#'+sKey[i]).val(sVal[i]);
        }
    }
start();
