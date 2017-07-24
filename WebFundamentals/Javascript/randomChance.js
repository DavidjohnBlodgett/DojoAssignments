
// winnings() returns the amount of won quarters from a win state...
function winnings(){
    return Math.floor(Math.random() * 50)+51
}

// main()
function slots(quarters, ceiling) {
    // While the user still has quarters, use Math.random to determine if they won.
    // There is a 1 in 100 chance to win the slot machine
    // winning gets you 50-100 more quarters...
    // return number of quarters when you win...
    // return 0 if you run out of qarters...
    // return if user hits ceiling...

    if(quarters === undefined){
        quarters = 0;
    }
    if(ceiling === undefined){
        ceiling = 0;
    }
    // var iveWonEnough = false;
    // var userWon = false;
    while(quarters){
        if(Math.trunc(Math.random() * 100) === 5){
            var result = quarters + winnings();
            if( result < ceiling){
                // haven't hit my ceiling yet... keep playing.
                console.log("I've won, but want to keep going...", result);
                quarters--;
                continue;
            }
            console.log("YOU WON!!!");
            return result;
        }
        quarters--;
    }
    console.log("You lost!");
    return 0;
}

// Test...
console.log(slots(100, 200));
