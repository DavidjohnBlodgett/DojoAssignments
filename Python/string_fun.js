function reverse(str){
    var result = "";
    for(var i = str.length-1;i>=0;i--){
        result += str[i];
    }
    return result;
}

var name = "davidjohn";

console.log("reverse string " + name + ": "  + reverse(name));


function insert(str,index,insertStr){
    var result = "";
    for(var i=0;i<str.length;i++){
        result += str[i];
        if( i === index ){
            for(var x=0;x<insertStr.length;x++){
                result += insertStr[x];
            }
        }
    }
    return result;
}

var foo = "dog";

console.log("insert string " + foo + ": "  + insert(name, 3, foo));
