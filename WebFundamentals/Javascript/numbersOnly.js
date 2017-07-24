function numbersOnly(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number"){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}


// TODO:
function numbersOnly2(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number"){
            // shift from index...
            var index = i;
            while(index <= arr.length-1){
                arr[index] = arr[index+1];
                index++;
            }
            arr.length = arr.length-1;
        }
    }
    return arr;
}


// test...
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
console.log(newArray);

// newArray is [1, -3, 0.5]
console.log(numbersOnly2([1, "apple", -3, "orange", 0.5]));
