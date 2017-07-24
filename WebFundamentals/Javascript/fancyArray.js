function fancyArray(arr,symbol,reversed) {
    if(symbol === undefined){
        symbol = "->"
    }
    if(reversed === undefined){
        reversed = false;
    }
    if(reversed){
        for(var i=arr.length-1;i>=0;i--){
            console.log("",i,symbol,arr[i]);
        }
        return;
    }
    for(var i=0;i<arr.length;i++){
        console.log("",i,symbol,arr[i]);
    }
}
var test = ["James", "Jill", "Jane", "Jack"]
//case 1
console.log("####");
fancyArray(test);
//case 1
console.log("####");
fancyArray(test, "----");
//case 1
console.log("####");
fancyArray(test, "----", true);
