function zero_negativity(arr){
    for(var i = 0; i<arr.length;i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}

function is_even(num) {
    if(num%2){
        return false;
    }
    return true;
}

function how_many_even(arr) {
    count = 0;
    for(var i=0;i<arr.length;i++){
        if(is_even(arr[i])){
            count++;
        }
    }
    return count;
}

function create_dummy_array(n) {
    if(n < 0){
        return "create_dummy_array requires a positive number..."
    }
    result = [];
    for(var i=1;i<=n;i++){
        result.push(Math.floor(Math.random() * 10))
    }
    return result;
}

function random_choice(arr) {
    if(arr.length === 0){
        return 'nothing in array!'
    }
    return arr[Math.floor(Math.random() * arr.length)]
}


// TEST CASES
console.log('MATH 1');
var a = [1,2,-5,9]
var b = [1,2,5,9]
console.log('-- zero_negativity fail state...');
console.log(a);
console.log(zero_negativity(a));
console.log('-- zero_negativity pass state...');
console.log(a);
console.log(zero_negativity(b));
console.log('\n');


console.log('MATH 2');
var odd_num = 3;
var even_num = 8;
console.log('-- is_even fail state...');
console.log(is_even(odd_num));
console.log('-- is_even pass state...');
console.log(is_even(even_num));
console.log('\n');


console.log('MATH 3');
var has_no_even = [3,7,9]
var has_even = [1,2,3,4]


console.log('-- how_many_even fail state...');
console.log(how_many_even(has_no_even));
console.log('-- how_many_even pass state...');
console.log(how_many_even(has_even));
console.log('\n');


console.log('MATH 4');
console.log('-- create_dummy_array fail state...');
console.log(create_dummy_array(-4));
console.log('-- create_dummy_array pass state...');
console.log(create_dummy_array(4));
console.log('\n');

console.log('MATH 5');
var foo = [1,2,3,4];
var bar = [];
console.log('-- random_choice fail state...');
console.log(random_choice(bar));
console.log('-- random_choice pass state...');
console.log(random_choice(foo));
console.log('\n');
