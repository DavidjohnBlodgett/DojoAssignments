

// var arr = [1,,"string","foo",3];
// var idx = 2;
//
// function remove(arr,idx){
//     console.log(idx);
//     console.log(idx+1);
//
//     for(var i=idx;i<arr.length;i++){
//         arr[i] = arr[i+1];
//     }
//
//     arr.length = arr.length-1
//     return arr;
// }
//
// function
// for(var i = 0;i<arr.length;i++){
//     remove(arr,idx));
// }

function removeArr(arr,idx) {
  for (var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length-1;
  return arr;
}
function numbersOnly2(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i]!= "number") {
      removeArr(arr,i);
    }
  }
  return arr
}


// Test
console.log(numbersOnly2([1,2,"bar",5,,-3,"hi","foo"]));
