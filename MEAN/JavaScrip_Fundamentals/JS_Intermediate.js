'use strict';

function starString(num) {
    let output = "";
    for(let i=0;i<=num;i++) {
        output = output +"*";
    }
    return output;
}

function drawStars(arr) {
    for(let i=0;i<arr.length;i++) {
        if(typeof arr[i] === 'string') {
            let temp = arr[i][0].toLowerCase();
            let output = "";
            for(let x=1;x<=arr[i].length;x++) {
                output = output + temp;
            }
            console.log(output);
        }
        else {
            console.log(starString(arr[i]));
        }

    }
}

let stars = starString(8)
console.log(stars);


let x = [4, 6, 1, 3, 5, 7, 25];
drawStars(x);

let z = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStars(z);
