function returnTimeString(hour,minute,period) {
    var firstString = "";
    var lastString  = "";
    var output = "";

    // first string...
    if(minute < 30){
        firstString = "just after";
    }else if (minute > 30) {
        firstString = "almost";
    }
    if (minute === 5) {
        firstString = "5 after";
    }
    if (minute === 15) {
        firstString = "a quarter after";
    }
    if (minute === 30) {
        firstString = "half after";
    }

    // last string...
    if(period === "AM"){
        lastString = "in the morning.";
    }else if (period === "PM") {
        lastString = "in the evening.";
    }
    if (hour === 12 && minute === 0 && period === "AM") {
        lastString = "midnight.";
    }
    if (hour === 12 && minute === 0 && period === "PM") {
        lastString = "noon.";
    }
    output = "It's " + firstString + " " + hour + " " + lastString;

    return output;
}

//
// UNIT TESTS
//

// case 1
var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
console.log(HOUR,MINUTE,PERIOD);
console.log(returnTimeString(HOUR,MINUTE,PERIOD));

// case 2
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
console.log(HOUR,MINUTE,PERIOD);
console.log(returnTimeString(HOUR,MINUTE,PERIOD));

// case 3
var HOUR = 12;
var MINUTE = 00;
var PERIOD = "AM";
console.log(HOUR,MINUTE,PERIOD);
console.log(returnTimeString(HOUR,MINUTE,PERIOD));

//case 4
var HOUR = 12;
var MINUTE = 00;
var PERIOD = "PM";
console.log(HOUR,MINUTE,PERIOD);
console.log(returnTimeString(HOUR,MINUTE,PERIOD));

//case 5
var HOUR = 12;
var MINUTE = 05;
var PERIOD = "PM";
console.log(HOUR,MINUTE,PERIOD);
console.log(returnTimeString(HOUR,MINUTE,PERIOD));

//TODO: could do more... but I should move on...
