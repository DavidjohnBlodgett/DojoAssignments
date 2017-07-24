function reverseArray(arr) {
    var a = 1;
    var b = 0;
    var t = 0;
    for(var i=0;i<arr.length;i++){
        t = arr[arr.length-a];
        arr[arr.length-a]= arr[b];
        arr[b] = t;
        if(b >= arr.length/2 || b === a-1){
            break;
            console.log(arr);
        }
        a++;
        b++;
    }

}

// var arr = [1,2,3,4];

reverseArray([1,2,3,4]);
// reverseArray(arr);
