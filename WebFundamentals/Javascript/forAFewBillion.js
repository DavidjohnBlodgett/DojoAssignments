// sum of 30days of work...
var sum = 0.01;

// TODO: this does not reflect total... just last day!
for(var i = 1; i <= 30; i++){
    sum = sum * 2;
}
console.log("sum of 30days of work...");
console.log(sum);

// days of work to get 10k...
var sum = 0.01;
var days = 1;

while(sum < 10000){
    sum = sum * 2;
    days++;
}

console.log("days of work to get 10k...");
//console.log(sum);
console.log(days);

// days of work to get 1 Billion...
var sum = 0.01;
var days = 1;

while(sum < 1000000000){
    sum = sum * 2;
    days++;
}

console.log("days of work to get 1 Billion...");
//console.log(sum);
console.log(days);

// days of work to get Infinity...
var sum = 0.01;
var days = 1;

while(sum < Infinity){
    sum = sum * 2;
    days++;
}

console.log("days of work to get Infinity...");
//console.log(sum);
console.log(days);
