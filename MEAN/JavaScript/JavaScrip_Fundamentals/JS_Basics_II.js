'use strict';

function magic_multiply(x, y){

    if(typeof x === 'number' && typeof y === 'number'){
        if( x === 0 && y === 0){
            return "All inputs 0";
        }
        return x * y;
    }

    if(typeof x === 'object' && typeof y === 'number'){
        for(let i = 0; i < x.length; i++){
            x[i] = x[i] * y;
        }
        return x;
    }

    if(typeof y === 'string'){
        return "Error: Can not multiply by string"
    }

    if(typeof x === 'string' && typeof y === 'number'){
        let temp = ""
        for(let i = 0;i <= y; i++){
            temp = temp + x;
        }
        return temp;
    }
    return "wtf";
    //return x;
}

console.log('\n');
// TEST 1
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

console.log('\n');
// TEST 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

console.log('\n');
// TEST 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

console.log('\n');
// TEST 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

console.log('\n');
// TEST 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

console.log('\n');
